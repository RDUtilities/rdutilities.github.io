const rdUtilitiesData = {
  products: [
    {
      name: "Robocopy SuperTool",
      logo: "./Logos/RobocopySuperToolLogo.png",
      platforms: ["Windows"],
      filterTags: ["windows"],
      category: "File Automation",
      summary:
        "A GUI for advanced Robocopy workflows, including scheduled copy sessions powered by Windows Task Scheduler.",
      features: [
        "Build complex copy jobs without memorizing switches",
        "Schedule recurring sessions through Task Scheduler",
        "Designed for repeatable and admin-friendly workflows"
      ],
      actions: [
        { label: "View Details", href: "./robocopy-supertool.html" },
        {
          label: "Download v1.5",
          href: "https://github.com/RDUtilities/RobocopyGUI/releases/download/v1.5/RobocopySuperTool.exe"
        }
      ]
    },
    {
      name: "AD SuperSearch",
      logo: "./Logos/ADSuperSearchLogo-WhiteBk.png",
      platforms: ["Windows", "macOS"],
      filterTags: ["windows", "mac", "cross-platform"],
      category: "Active Directory",
      summary:
        "Search users, groups, and computers in Active Directory on both Windows and macOS without relying on RSAT-heavy workflows.",
      features: [
        "Fast AD lookups for users, groups, and computers",
        "Available in both Windows and Mac editions",
        "Built to simplify common support and admin tasks"
      ],
      actions: [
        { label: "View Details", href: "./ad-supersearch.html" },
        {
          label: "Download PC v2.5",
          href: "https://github.com/RDUtilities/ADSearchToolNew/releases/download/v2.5-security/AD.Super.Search.v2.5.zip"
        },
        {
          label: "Download Mac v2.0.0",
          href: "https://github.com/RDUtilities/ADSuperSearchToolME/releases/download/v2.0.0/ADSuperSearch-Mac-Edition-Release.zip"
        }
      ]
    },
    {
      name: "LogSuperTool",
      logo: "./Logos/LogSuperToolLogo.png",
      logoClass: "product-card__logo--wide",
      platforms: ["Windows", "macOS"],
      filterTags: ["windows", "mac", "cross-platform"],
      category: "Log Analysis",
      summary:
        "A quick and powerful log-reading app with advanced analysis features and export capabilities.",
      features: [
        "Read and inspect logs more efficiently",
        "Advanced analysis workflows for troubleshooting",
        "Export results for sharing and follow-up"
      ],
      actions: [
        { label: "View Details", href: "./logsupertool.html" },
        {
          label: "Download PC v1.0.1",
          href: "https://github.com/RDUtilities/LogSuperTool/releases/download/v1.0.1/LogSuperTool-v1.0.1-win-x64-single.zip"
        },
        {
          label: "Download Mac v1.0.0",
          href: "https://github.com/RDUtilities/LogSuperTool-MacEdition/releases/download/v1.0.0/LogSuperToolMacEdition-1.0.0.dmg"
        }
      ]
    },
    {
      name: "SoundChoice SuperTool",
      logo: "./Logos/SoundChoiceSuperToolLogo.png",
      platforms: ["macOS"],
      filterTags: ["mac"],
      category: "Audio Routing",
      summary:
        "Control app and system audio on your Mac, route sound to multiple outputs, and save mixer presets.",
      features: [
        "Route audio to multiple outputs",
        "Fine-tune volume per app or source",
        "Save presets for repeatable setups"
      ],
      actions: [
        { label: "View Details", href: "./soundchoice-supertool.html" },
        {
          label: "Download v1.0",
          href: "https://github.com/RDUtilities/SoundChoiceSuperTool/releases/download/v1.0.0/SoundChoiceSuperTool-v1.0.0-macOS.zip"
        }
      ]
    },
    {
      name: "SpeakShot",
      logo: "./Logos/SpeakShotLogo.png",
      platforms: ["Windows"],
      filterTags: ["windows"],
      category: "OCR + Speech",
      summary:
        "Capture text from the screen with OCR and turn it into speech using Windows voices or Azure Neural voices.",
      features: [
        "Grab on-screen text from a screenshot region",
        "Convert OCR results directly into speech",
        "Supports built-in voices and Azure Neural voices"
      ],
      actions: [
        { label: "View Details", href: "./speakshot.html" },
        {
          label: "Download v1.1",
          href: "https://github.com/RDUtilities/SpeakShot/releases/download/v1.1/SpeakShot-v1.1.zip"
        }
      ]
    },
    {
      name: "WinGet SuperTool",
      logo: "./Logos/WinGetSuperToolLogo.png",
      platforms: ["Windows"],
      filterTags: ["windows"],
      category: "Package Management",
      summary:
        "A GUI for the WinGet ecosystem that helps users search, install, update, and preload application sets from templates.",
      features: [
        "Search and install software from WinGet",
        "Update apps without command-line syntax",
        "Use CSV templates to preload software sets"
      ],
      actions: [
        { label: "View Details", href: "./winget-supertool.html" },
        {
          label: "Download v1.0.0",
          href: "https://github.com/RDUtilities/WinGet-Super-Tool/releases/download/v1.0.0/WinGetTool.exe"
        }
      ]
    },
    {
      name: "SteamGameServer Patch Tool",
      logo: "./Logos/SteamGameServerPatchToolLogo.png",
      platforms: ["Windows"],
      filterTags: ["windows"],
      category: "Server Automation",
      summary:
        "Use SteamCMD with a GUI to stop servers, patch them automatically on schedule, and restart them after updates.",
      features: [
        "Start and stop game servers from one interface",
        "Automate patching through Task Scheduler",
        "Restart servers after patch windows complete"
      ],
      actions: [
        { label: "View Details", href: "./steamgameserver-patch-tool.html" },
        {
          label: "Download v1.0.0",
          href: "https://github.com/RDUtilities/SteamGameServerPatchTool/releases/download/v1.0.0/SteamGameServerPatchTool-v1.0.0-win-x64.zip"
        }
      ]
    },
    {
      name: "Dollars and Sense",
      logo: "./Logos/DollarsSenseLogo.png",
      platforms: ["macOS"],
      filterTags: ["mac"],
      category: "Personal Finance",
      summary:
        "A Mac budgeting app that imports bank CSVs, uses AI-assisted categorization, and visualizes spending by category.",
      features: [
        "Import bank data through CSV files",
        "Use AI to categorize spending patterns",
        "Generate charts and category totals"
      ],
      actions: [
        { label: "View Details", href: "./dollars-and-sense.html" },
        {
          label: "Download v3.1",
          href: "https://github.com/RDUtilities/DollarsAndSense/releases/download/v3.1-smartbulk/DollarsAndSense-v3.1.zip"
        }
      ]
    },
    {
      name: "TaniumDeployPackager",
      logo: "./Logos/TaniumDeployPackagerLogo.png",
      platforms: ["Windows"],
      filterTags: ["windows"],
      category: "Packaging",
      summary:
        "An offline packaging tool for Tanium Deploy that helps generate the needed JSON metadata, binaries, and install logic outside the Tanium Console.",
      features: [
        "Prepare correctly formatted package metadata",
        "Support install, update, and remove command generation",
        "Help fill package logic with AI-assisted analysis"
      ],
      actions: [
        { label: "View Details", href: "./taniumdeploypackager.html" },
        {
          label: "Download v1.0",
          href: "https://github.com/RDUtilities/TaniumDeployPackageBuilder/releases/download/v1.0/TaniumDeployPackager-v1.0.zip"
        }
      ]
    },
    {
      name: "Shanghai / Nanna's Rummy",
      logo: "./Logos/Shanghai & Nanna's Rummy logo.png",
      logoClass: "product-card__logo--wide",
      platforms: ["Web", "Mobile"],
      filterTags: ["web"],
      category: "Game Project",
      summary:
        "A browser-based rummy experience featuring both Shanghai and Nanna's Rummy, playable solo or multiplayer on the web and mobile devices.",
      noteHtml:
        "For multiplayer, open <a href=\"https://snrummy-api.onrender.com/health\" target=\"_blank\" rel=\"noreferrer\">https://snrummy-api.onrender.com/health</a> first. Then go to the play site, start a multiplayer session, and create a lobby.",
      features: [
        "Choose between two distinct rummy variants",
        "Support for single-player and multiplayer",
        "Designed to play on web and mobile"
      ],
      actions: [
        { label: "View Details", href: "./shanghai-nannas-rummy.html" },
        { label: "Play Online", href: "http://snrummy-web.onrender.com" }
      ]
    }
  ],
  updates: [
    {
      type: "Launch Post",
      title: "Welcome to RDUtilities",
      body:
        "Introduce the company mission, explain the focus on GUI-first productivity software, and invite visitors to explore the current app lineup."
    },
    {
      type: "Release Spotlight",
      title: "How Robocopy SuperTool simplifies scheduled copy jobs",
      body:
        "Use this card for a short product post with screenshots, a quick walkthrough, and a direct GitHub release download link."
    },
    {
      type: "Behind the Build",
      title: "From command line power to approachable interfaces",
      body:
        "A brand story post about why these tools exist and how they help real users get complex work done with less friction."
    }
  ]
};
