# hornlib-cli — French Horn Fingering Chart, Transposition & Harmonics CLI (`hornlib.com`)

[![Official Website](https://img.shields.io/badge/Official_Studio-hornlib.com-blue)](https://hornlib.com)
[![MCPTry 100/100](https://mcptry.com/badge/com.hornlib/mcp)](https://www.mcptry.com/servers/com.hornlib/mcp)
[![Glama Grade A](https://glama.ai/mcp/connectors/com.hornlib/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.hornlib/mcp)
[![ClawHub Skill](https://img.shields.io/badge/ClawHub-@hornlib%2Fhornlib-orange)](https://clawhub.ai/hornlib/skills/hornlib)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald)](./LICENSE)

Official command-line interface and zero-dependency client for [**HornLib (https://hornlib.com)**](https://hornlib.com) — the interactive French Horn F/Bb double horn fingering studio, multi-key pitch transposer, natural overtone harmonic series analyzer, and orchestral audition excerpt library.

---

## ⚡ Quick Start (`npx`)

Run directly without installation:

```bash
# Look up F-side, Bb-trigger, and alternate valve fingerings for any note (C1 to F6)
npx hornlib-cli fingering G4 double

# Transpose written horn pitch across historical crooks (F, Bb, Eb, D, C, G, A)
npx hornlib-cli transpose C5 Eb

# Inspect natural overtone harmonic series partials & equal-temperament cent deviations
npx hornlib-cli harmonics open F

# Retrieve orchestral horn audition excerpt performance guides
npx hornlib-cli excerpt "Strauss Till Eulenspiegel"

# Generate a structured daily brass warmup routine
npx hornlib-cli warmup 30 intermediate
```

Or install globally:

```bash
npm install -g hornlib-cli
hornlib fingering C5
```

---

## 🌐 Interactive Web Tools on [hornlib.com](https://hornlib.com)

| Web Module | Direct URL | Key Capabilities |
| :--- | :--- | :--- |
| **Interactive French Horn Studio** | [https://hornlib.com](https://hornlib.com) | Real-time F/Bb double horn valve visualization, audio playback & pitch reference |
| **F/Bb Double Horn Fingering Chart** | [https://hornlib.com/fingerings](https://hornlib.com/fingerings) | Complete 4-octave valve combinations (`C1`–`F6`), trigger (`T`) toggles & trills |
| **7-in-1 Brass Practice & Transposition Suite** | [https://hornlib.com/7-in-1-tools](https://hornlib.com/7-in-1-tools) | Multi-key crook transposer, drone tuner, metronome & harmonic analyzer |
| **Full Note Compass & Overtone Series** | [https://hornlib.com/all-notes](https://hornlib.com/all-notes) | 1st–16th partial frequencies (Hz), cent deviations (`-31c` 7th, `-49c` 11th) |
| **Orchestral Audition Excerpts** | [https://hornlib.com/excerpts](https://hornlib.com/excerpts) | Curated audition guides for Mozart 4, Strauss, Mahler, Brahms & Tchaikovsky |
| **Beginner Horn & Mouthpiece Guide** | [https://hornlib.com/beginners](https://hornlib.com/beginners) | Kruspe vs Geyer wrap comparison & mouthpiece rim/cup pairing |
| **Acoustics & Pedagogy Articles** | [https://hornlib.com/guides-pedagogy](https://hornlib.com/guides-pedagogy) | Stopped horn (`+`) acoustics, right-hand bell position & embouchure mechanics |

---

## 🤖 AI Agent & MCP Server Integration (`com.hornlib/mcp`)

Connect Claude Desktop, Claude Code, Cursor, Windsurf, Hermes Agent, or OpenClaw directly to HornLib's stateless Streamable HTTP MCP endpoint:

```json
{
  "mcpServers": {
    "hornlib": {
      "type": "streamable-http",
      "url": "https://hornlib.com/api/mcp"
    }
  }
}
```

- **MCP Server Repository**: [https://github.com/HornLib/mcp-server](https://github.com/HornLib/mcp-server)
- **ClawHub Skill**: [https://clawhub.ai/hornlib/skills/hornlib](https://clawhub.ai/hornlib/skills/hornlib)
- **Vercel Skills**: [https://www.skills.sh/hornlib/mcp-server/hornlib](https://www.skills.sh/hornlib/mcp-server/hornlib)
- **OpenAPI 3.1 Specification**: [https://hornlib.com/openapi.json](https://hornlib.com/openapi.json)

---

## 📄 License

MIT © [HornLib (hornlib.com)](https://hornlib.com)
