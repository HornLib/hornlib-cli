#!/usr/bin/env node

const ENDPOINT = 'https://hornlib.com/api/mcp';

const HELP = `
🎺 HornLib CLI v1.0.3 — Interactive French Horn F/Bb Double Horn Studio
Official Web Studio: https://hornlib.com
Fingering Chart:     https://hornlib.com/fingerings
7-in-1 Brass Tools:  https://hornlib.com/7-in-1-tools

Usage:
  npx hornlib-cli fingering <note> [double|f|bb]    Look up F/Bb valve fingerings (e.g. C4, G4, C5, F5)
  npx hornlib-cli transpose <note> <fromKey>        Transpose horn pitch (F, Bb, Eb, D, C, G, A)
  npx hornlib-cli harmonics [combination]           Analyze overtone harmonic series partials (e.g. open, 1, 12)
  npx hornlib-cli trill <fromNote> <toNote>         Find valve & lip trill combinations
  npx hornlib-cli excerpt <work>                    Retrieve orchestral audition excerpt guide (e.g. ತಿಲ್ಲ, mozart4)
  npx hornlib-cli warmup [minutes]                  Generate daily brass warmup routine (default: 30)
  npx hornlib-cli tools                             List all 8 HornLib MCP tools
`;

async function callMcpTool(name, args = {}) {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 1,
      method: 'tools/call',
      params: { name, arguments: args }
    })
  });
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} from ${ENDPOINT}`);
  }
  const data = await res.json();
  const text = data?.result?.content?.[0]?.text;
  if (text) {
    try {
      return JSON.stringify(JSON.parse(text), null, 2);
    } catch {
      return text;
    }
  }
  return JSON.stringify(data, null, 2);
}

async function listMcpTools() {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'tools/list', params: {} })
  });
  const data = await res.json();
  return data?.result?.tools || [];
}

async function main() {
  const [, , cmd, arg1, arg2] = process.argv;
  if (!cmd || cmd === '--help' || cmd === '-h' || cmd === 'help') {
    console.log(HELP.trim());
    return;
  }
  if (cmd === '--version' || cmd === '-v') {
    console.log('1.0.3');
    return;
  }
  if (cmd === 'tools') {
    const tools = await listMcpTools();
    for (const t of tools) {
      console.log(`- ${t.name}: ${t.description}`);
    }
    console.log('\nWeb Reference: https://hornlib.com');
    return;
  }
  if (cmd === 'fingering') {
    console.log(await callMcpTool('lookup_french_horn_fingering', { note: arg1 || 'G4', hornType: arg2 || 'double' }));
    return;
  }
  if (cmd === 'transpose') {
    console.log(await callMcpTool('transpose_french_horn_pitch', { note: arg1 || 'C5', fromKey: arg2 || 'F', toKey: 'Concert' }));
    return;
  }
  if (cmd === 'harmonics') {
    console.log(await callMcpTool('analyze_horn_harmonic_series', { valveCombination: arg1 || 'open', hornSide: arg2 || 'F' }));
    return;
  }
  if (cmd === 'trill') {
    console.log(await callMcpTool('lookup_horn_trill_fingering', { baseNote: arg1 || 'G4', upperNote: arg2 || 'A4' }));
    return;
  }
  if (cmd === 'excerpt') {
    console.log(await callMcpTool('get_orchestral_horn_excerpt_guide', { query: arg1 || 'Strauss Till Eulenspiegel' }));
    return;
  }
  if (cmd === 'warmup') {
    console.log(await callMcpTool('generate_daily_horn_warmup_routine', { durationMinutes: Number(arg1) || 30, level: arg2 || 'intermediate' }));
    return;
  }
  console.log(HELP.trim());
}

main().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
