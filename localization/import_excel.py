"""Import the Key / Vietnamese / English workbook using Python's standard library."""
from pathlib import Path
from zipfile import ZipFile
from xml.etree import ElementTree as E
import json,re,sys
folder=Path(__file__).resolve().parent
file=Path(sys.argv[1])if len(sys.argv)>1 else folder/'HealMata_Translations_VI_EN.xlsx'
ns={'s':'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
with ZipFile(file)as z:
    shared=[]
    if'sharedStrings.xml'in[p.split('/')[-1]for p in z.namelist()]:
        shared=[''.join(si.itertext())for si in E.fromstring(z.read('xl/sharedStrings.xml')).findall('s:si',ns)]
    tree=E.fromstring(z.read('xl/worksheets/sheet1.xml'));data=[]
    for row in tree.findall('.//s:sheetData/s:row',ns):
        values=['','','']
        for c in row.findall('s:c',ns):
            column=re.sub('[0-9]','',c.attrib['r'])
            if column not in('A','B','C'):continue
            v=c.find('s:v',ns);value=v.text if v is not None else ''
            if c.attrib.get('t')=='s':value=shared[int(value)]
            elif c.attrib.get('t')=='inlineStr':value=''.join(t.text or ''for t in c.findall('.//s:t',ns))
            values['ABC'.index(column)]=value
        if any(values):data.append(values)
assert data[0]==['Key','Vietnamese','English'],'Expected Key / Vietnamese / English headers in A1:C1'
canonical=json.loads((folder/'source.json').read_text(encoding='utf-8'))
keys=set();vi={};en={}
for key,v,e in data[1:]:
    assert key and v and e,'Blank Key or translation'
    assert re.fullmatch('[a-z][a-z0-9_.]*',key),f'Invalid key: {key}'
    assert key not in keys,f'Duplicate key: {key}'
    expected=set(re.findall(r'\{\w+\}',canonical.get(key,v)))
    assert set(re.findall(r'\{\w+\}',v))==expected==set(re.findall(r'\{\w+\}',e)),f'Placeholder mismatch: {key}'
    keys.add(key);vi[key]=v;en[key]=e;canonical.setdefault(key,v)
assert not set(canonical)-keys,'Existing keys were removed; retain them to preserve screen mappings'
for language,items in [('vi',vi),('en',en),('source',canonical)]:
    (folder/(language+'.json')).write_text(json.dumps(items,ensure_ascii=False,indent=2),encoding='utf-8')
(folder.parent/'js'/'translations.js').write_text('window.HM_TRANSLATIONS='+json.dumps({'vi':vi,'en':en,'source':canonical},ensure_ascii=False,separators=(',',':'))+';\n',encoding='utf-8')
catalog=json.loads((folder/'catalog.json').read_text(encoding='utf-8'));lookup={r['Key']:r for r in catalog}
for k in vi:
    lookup.setdefault(k,{'Key':k,'sourceText':canonical[k]});lookup[k].update(Vietnamese=vi[k],English=en[k])
(folder/'catalog.json').write_text(json.dumps(list(lookup.values()),ensure_ascii=False,indent=2),encoding='utf-8')
print(f'Imported {len(keys)} keys. Reload index.html to apply the updated wording.')
