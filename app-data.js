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
        { label: "Add GitHub Release URL", href: "#" }
      ]
    },
    {
      name: "AD SuperSearch",
      logo: "./Logos/ADSuperSearchLogo.png",
      platforms: ["Windows"],
      filterTags: ["windows"],
      category: "Active Directory",
      summary:
        "Search users, groups, and computers in Active Directory without relying on RSAT-heavy workflows.",
      features: [
        "Fast AD lookups for multiple object types",
        "Built to simplify common support and admin tasks",
        "Reduces the need for command-line or RSAT tooling"
      ],
      actions: [
        { label: "Add GitHub Release URL", href: "#" }
      ]
    },
    {
      name: "AD SuperSearch Mac Edition",
      logo: "./Logos/ADSuperSearchMacEditionLogo.png",
      platforms: ["macOS"],
      filterTags: ["mac"],
      category: "Active Directory",
      summary:
        "A macOS version of AD SuperSearch that brings the same approachable Active Directory lookup workflow to Mac users.",
      features: [
        "Search AD users, groups, and computers from macOS",
        "Keeps core experience aligned with the Windows version",
        "Useful for mixed-platform IT environments"
      ],
      actions: [
        { label: "Add GitHub Release URL", href: "#" }
      ]
    },
    {
      name: "LogSuperTool",
      logo: "./Logos/LogSuperToolLogo.png",
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
        { label: "Add GitHub Release URL", href: "#" }
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
        { label: "Add GitHub Release URL", href: "#" }
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
        { label: "Add GitHub Release URL", href: "#" }
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
        { label: "Add GitHub Release URL", href: "#" }
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
        { label: "Add GitHub Release URL", href: "#" }
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
        { label: "Add GitHub Release URL", href: "#" }
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
        { label: "Add GitHub Release URL", href: "#" }
      ]
    },
    {
      name: "Shanghai / Nanna's Rummy",
      logo: "./Logos/RDUtilitiesLogo.png",
      platforms: ["Web", "Mobile"],
      filterTags: ["web"],
      category: "Game Project",
      summary:
        "A browser-based rummy experience featuring both Shanghai and Nanna's Rummy, playable solo or multiplayer on the web and mobile devices.",
      features: [
        "Choose between two distinct rummy variants",
        "Support for single-player and multiplayer",
        "Designed to play on web and mobile"
      ],
      actions: [
        { label: "Play Online", href: "https://onrender.com" }
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
