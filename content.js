window.PORTFOLIO_DATA = {
  brand: {
    name: "Keegan Edwards",
    title: "Senior Technical Artist",
    email: "mailto:keegan.edwards@gmail.com",
    linkedin: "https://www.linkedin.com/in/keegan-edwards/",
    resume: "Keegan_Edwards_Resume_2026.pdf"
  },
  intro: {
    name: "KEEGAN EDWARDS",
    title: "SENIOR TECHNICAL ARTIST",
    text: ``
  },
  infoWindows: {
    portfolio: {
      title: "Portfolio",
      text: `Project and image order is controlled by the arrays in content.js. Move an image object up or down in its images array to change gallery order without renaming files.`
    },
    about: {
    title: "Keegan Edwards",
    profileImage: "https://github.com/keeganedwards.png",
    text: `AAA developer with a demonstrated history of working in the games industry. Strong arts and design professional skilled in pipeline creation for Unreal and Maya Deep knowledge of the entire art pipeline. Comfortable in a broad assortment of different artistic aesthetics ranging from realism to stylized art.
    `
  }
  },
  games: [
    {
      id: "ashes-of-creation",
      title: "Ashes of Creation",
      disclaimerOwner: "Intrepid Studios",
      bannerPosition: "top",
      banner: "Images/3AshesOfCreation/Banner.png",
      projects: [
        {
          id: "ashes-harbingers",
          title: "Harbingers PCG",
          thumbnail: "Images/3AshesOfCreation/1Harbingers/Harbingers.png",
          text: `Harbingers was a large-scale world event that spanned three major areas of the map. Tendrils extending from the primary Harbinger impact site progressively transformed the surrounding landscape by expanding corrupted zones in segmented stages. Each segment swapped grass, trees, environment modifiers, and landscape textures into a corrupted biome variant. I used Dynamic Meshes to visualize the bulk of this transformation through RVTs, then broke up the larger material transitions with PCG-driven decal scattering and secondary material variation.

A key requirement was ensuring that the corrupted boundary walls remained continuous as each segment expanded into the next. These walls helped clearly define the play space and gave players readable boundaries when entering corrupted areas. I also built editor-facing PCG tools that allowed designers and artists to visualize these spaces directly in the editor, helping prevent accidental submissions in an incorrect state.

In addition, I partnered with the VFX team to drive Niagara emitters through the PCG toolset. This allowed the entire wall system to use only a small number of particle systems, significantly reducing performance cost. The system also needed to support HLODs, so I created custom material functions that applied the corruption visually at distance for HLOD meshes.`,
          images: [
            { src: "Images/3AshesOfCreation/1Harbingers/AOC_Captures_Harbingers_01.gif", title: "Harbingers", text: "" },
            { src: "Images/3AshesOfCreation/1Harbingers/BirdsEye.png", title: "Harbingers", text: "" },
          ]
        },
        {
          id: "ashes-hlods",
          title: "Landscape Oprimization",
          thumbnail: "Images/3AshesOfCreation/2Hlods/AOC_Captures_HLODS_3.png",
          text: `For landscape optimization, I built tooling to manage and optimize draw distances for grass and foliage. This improved performance and helped resolve visual issues where objects would pop in or out at inconsistent distances. The tool processed foliage and grass type assets together, organized them into their own sections, and allowed users to automatically calculate culling distances based on exposed settings. These calculated values could then be applied across all relevant assets. I also built a test-gym creation tool so changes could be validated in an isolated level before being submitted.

I also worked on the game’s HLOD setup. The previous structure used multiple separate HLOD setups and layers parented to each other, which created performance issues and increased baking complexity. I helped move the system toward a shared hierarchy, reducing the number of generated HLOD meshes while maintaining visually distinct materials at distance. To support this workflow, I built validation tooling that performed a series of checks before HLOD builds could run, helping reduce build errors and avoid common failure cases.

I also began work on a Slack-connected build recovery system that could restart HLOD builds if the build machine stopped unexpectedly, although the game shut down before this feature was fully implemented. In addition to HLOD work, I optimized the landscape material and RVT setup for the open world by adjusting RVT settings, texture sizes, and texture pool assignments while preserving visual fidelity. I also optimized weather events, such as snow, across different performance profiles.`,
          images: [
            { src: "Images/3AshesOfCreation/2Hlods/AOC_Captures_HLODS_1.gif", title: "HLOD View", text: "" },
            { src: "Images/3AshesOfCreation/2Hlods/AOC_Captures_HLODS_2.gif", title: "HLOD Comparison", text: "" },
            { src: "Images/3AshesOfCreation/2Hlods/AOC_Captures_HLODS_4.png", title: "HLOD Comparison", text: "" },
          ]
        },
        {
          id: "ashes-optimization",
          title: "Shadow Optimization",
          thumbnail: "Images/3AshesOfCreation/3Optimization/LightingFrontImage.png",
          text: `I built a shadow performance optimization pass in Unreal Engine 5.6 focused on reducing the Shadow GPU cost on low- to mid-spec hardware. This work involved breaking shadow performance into clear tuning categories, including shadow map resolution, cascaded shadow map count, dynamic shadow distance, small-object shadow culling, per-light shadow settings, and per-mesh shadow casting rules.

I created multiple quality profiles, ranging from balanced to aggressive, so the project could scale between visual quality and performance targets. To complete the pass, I identified the highest-impact CVars and editor settings, tested how each change affected GPU cost and visual stability, and defined recommended ranges that could be applied through .ini files.

Before optimization, the low-spec shadow pass was costing roughly **5–6 ms**. After the optimization pass, the cost was reduced to approximately **1.7–2 ms**, bringing the feature much closer to the target performance budget while maintaining acceptable visual quality.`,
          images: [
            { src: "Images/3AshesOfCreation/3Optimization/AOC_Captures_6.gif", title: "Optimization View", text: "" },
          ]
        }
      ]
    },
    {
      id: "multiversus",
      title: "MultiVersus",
      disclaimerOwner: "Warner Brothers",
      banner: "Images/1Multiversus/Banner.jpg",
      projects: [
        {
          id: "multiversus-lighting-material-overhaul",
          title: "Lighting and Material Overhaul",
          text: `During the transition from beta to release, we wanted the character materials to feel more dynamic and physically grounded. We also needed to rebuild the existing lighting system so it could support the full cast more consistently.

I worked with the character team and art direction to update workflows and materials for the visual overhaul. I also built lighting systems that supported a wider range of character presentation needs throughout the game.`,
          images: [
            { src: "Images/1Multiversus/1LightingAndMaterialOverhaul/MultiVersusVisualAndCharacterLightingOverhaul.gif", title: "Lighting and Material Overhaul", text: "" }
          ]
        },
        {
          id: "multiversus-battle-pass-fighter-road",
          title: "Battle Pass and Fighter Road",
          thumbnail: "Images/1Multiversus/Override/BattlePass.png",
          text: `This work began as part of a small strike team focused on getting the golden path working for the menus. I built the menu scene manager, which handled menu transitions, materials, scene changes, and reward presentation.

The system also controlled how actors asynchronously loaded into the scene while players hovered over or interacted with different UI elements.`,
          images: [
            { src: "Images/1Multiversus/2BattlePassAndFighterRoad/BattlePass.gif", title: "Battle Pass", text: "" },
            { src: "Images/1Multiversus/2BattlePassAndFighterRoad/BattlePassTransitions.gif", title: "Battle Pass Transitions", text: "" },
            { src: "Images/1Multiversus/2BattlePassAndFighterRoad/FighterRoad.gif", title: "Fighter Road", text: "" },
            { src: "Images/1Multiversus/2BattlePassAndFighterRoad/StoreRewardPopup.gif", title: "Store Reward Popup", text: "" }
          ]
        },
        {
          id: "multiversus-store",
          title: "Menus",
          thumbnail: "Images/1Multiversus/Override/Start.png",
          text: `
Storefront presentation work including asset previews, hover states, icons, character presentation, reward transitions, and effects.

- Built the store presentation transition and asset management system.
- Supported reward displays.
- Managed icon resolution and created tools for character reward and store icons.
- Built UI materials with clean, non-aliased shapes that artists could author in editor.
- Built tooling for maintaining reward texture data.`,
          images: [
            { src: "Images/1Multiversus/3Store/Start.gif", title: "Store Start", text: "" },
            { src: "Images/1Multiversus/3Store/Banners.gif", title: "Banners", text: "" },
            { src: "Images/1Multiversus/3Store/HoverOver.gif", title: "Hover States", text: "" },
            { src: "Images/1Multiversus/3Store/Icons.gif", title: "Icons", text: "" },
            { src: "Images/1Multiversus/3Store/IconsAndCharacters.gif", title: "Icons and Characters", text: "" },
            { src: "Images/1Multiversus/3Store/RewardTransitions.gif", title: "Reward Transitions", text: "" },
            { src: "Images/1Multiversus/3Store/VFX.gif", title: "VFX", text: "" }
          ]
        },
        {
          id: "multiversus-end-of-game",
          title: "Game Start and End Screen",
          thumbnail: "Images/1Multiversus/Override/MatchStart.png",
          text: `I worked with animation to build a system that allowed them to adjust character placement and delay spawn timing. I designed the logic that determined which game mode was being played, then connected that to the appropriate character placement, victory, and end-of-game arrangements.

I also built tooling that allowed animators to test these setups easily, iterate quickly, and review their work in context. The tool supported control over banners, characters, skins, and player nameplates.`,
          images: [
            { src: "Images/1Multiversus/4EndOfGame/MatchStart.gif", title: "Match Start", text: "" },
            { src: "Images/1Multiversus/4EndOfGame/EndOfGame.gif", title: "End Of Game", text: "" },
            { src: "Images/1Multiversus/4EndOfGame/EOGTools.gif", title: "End Of Game Tools", text: "" },
            { src: "Images/1Multiversus/4EndOfGame/Layouts.gif", title: "Layouts", text: "" },
          ]
        },
        {
          id: "multiversus-icon-creator",
          title: "Icon Creator",
          thumbnail: "Images/1Multiversus/5IconCreator/IconAdjustmentTool.png",
          text: `We needed to generate a large pool of icons for the full cast, along with every item and cosmetic in the game. The system needed to maximize reuse, allow fast iteration on asset placement, and maintain performance when displaying large asset pools.

I built a tool that automatically batched through character framing. If an animation was reused on another skin, the tool could reuse the same frame and capture the full character body. It processed the entire cast and attached the generated results to their data assets so they could be used directly in the store.

Portraits could be cropped with dedicated cropping tools, allowing quick real-time adjustments that could be reviewed in context. The tool also supported swapping lighting environments and capturing characters in authored poses for splash, store, and promotional work.`,
          images: [
            { src: "Images/1Multiversus/5IconCreator/ThumbnailTool.gif", title: "Thumbnail Tool", text: "" },
            { src: "Images/1Multiversus/5IconCreator/IconCreator.gif", title: "Icon Creator", text: "" },
          ]
        }
      ]
    },
    {
      id: "the-last-of-us-part-1",
      title: "The Last of Us Part I",
      disclaimerOwner: "Naughty Dog",
      banner: "Images/2TheLastOfUsPart1/Banner.jpg",
      bannerPosition: "top",
      projects: [
        {
          id: "tlou-part-1-character-pipeline",
          title: "Character Art Pipeline",
          text: `Problem Statement: We began The Last of Us Part I with a small character art team and an ambitious goal: deliver a remaster with current-generation quality, unique characters, more characters on screen, and higher fidelity with fewer people and resources.

To make that possible, we needed to reduce rework, increase asset reuse, stay organized, and keep collaboration efficient so each artist's time could be used as effectively as possible. Early in production, it became clear that the character art pipeline needed improvements. Coming off The Last of Us Part II, we had identified several problems that needed to be addressed:

- Art assets were often hard to find or disorganized, which required extra communication just to locate reusable work. Even when assets were organized, understanding their status and visual quality required time spent browsing files and task-tracking software. This compounded over time, causing less reuse and more duplicated effort.
- Building an asset often required multiple disciplines: art to create it, rigging to skin it, and technical art to create the game data needed to view the result. This led to long iteration times and pushed developers into work outside the core of their discipline.
- We wanted to avoid crunch by tracking the trajectory and completion status of assets more clearly. Better visibility would help us plan and make it easier for artists to update asset status.
- Cast-wide updates often happened repeatedly near the end of development, including UV changes, actor setting issues, and reskinning caused by model changes.
- Significant time was spent fixing bugs caused by interactions between assets on the same character. Not all assets fit together cleanly, and underlying geometry sometimes remained in place, causing interpenetration during animation.

There were also project-specific challenges:

- Multiple teams were working across different version control systems and repositories, which made organization more difficult.
- Large segments of the project eventually needed database and file-location moves.
- The shift to work from home introduced long latency times in version control, especially when submitting large file updates.`,
          images: [
            { src: "Images/2TheLastOfUsPart1/3CharacterAssetBrowser/CabbDemonstration.png", title: "Character Asset Browser", text: "" }
          ]
        },
        {
          id: "tlou-part-1-character-asset-browser",
          title: "Character Asset Browser",
          text: `Character asset browsing and production support work focused on making character assets easier to find, review, reuse, and track throughout production.`,
          images: [
            { src: "Images/2TheLastOfUsPart1/3CharacterAssetBrowser/CabbDemonstration.png", title: "Character Asset Browser", text: "" }
          ]
        }
      ]
    },
    {
      id: "the-last-of-us-part-2",
      title: "The Last of Us Part II",
      disclaimerOwner: "Naughty Dog",
      banner: "Images/4TheLastOfUsPart2/Banner.jpg",
      bannerPosition: "top",
      projects: [
        {
          id: "tlou-part-2-ellie",
          title: "Ellie",
          thumbnailPosition: "top",
          text: `I had the great fortune to work on young Ellie for The Last of Us Part II with the wonderfully talented Naughty Dog team. I contributed to a portion of the model, which was scanned by our awesome team at VASG.

My work focused on Ellie's sweater model and textures. The rest of the character was created by the fantastic artists at Naughty Dog.`,
          images: [
            { src: "Images/4TheLastOfUsPart2/1Ellie/keegan-edwards-mid-color.jpg", title: "Mid Color", text: "" },
            { src: "Images/4TheLastOfUsPart2/1Ellie/keegan-edwards-full-clay.jpg", title: "Full Clay", text: "" },
            { src: "Images/4TheLastOfUsPart2/1Ellie/keegan-edwards-full-color.jpg", title: "Full Color", text: "" },
            { src: "Images/4TheLastOfUsPart2/1Ellie/keegan-edwards-masked-color.jpg", title: "Full Masked Color", text: "" },
            { src: "Images/4TheLastOfUsPart2/1Ellie/keegan-edwards-mid-clay.jpg", title: "Mid Clay", text: "" },
            { src: "Images/4TheLastOfUsPart2/1Ellie/keegan-edwards-mid-masked.jpg", title: "Mid Masked", text: "" },
            { src: "Images/4TheLastOfUsPart2/1Ellie/keegan-edwards-side-clay.jpg", title: "Side Clay", text: "" },
            { src: "Images/4TheLastOfUsPart2/1Ellie/keegan-edwards-side-color.jpg", title: "Side Color", text: "" },
            { src: "Images/4TheLastOfUsPart2/1Ellie/keegan-edwards-side-masked.jpg", title: "Side Masked", text: "" }
          ]
        },
        {
          id: "tlou-part-2-prisoners",
          title: "Prisoners",
          text: `I had the privilege of working with Naughty Dog on The Last of Us Part II. This scene was a huge team effort. I worked on character assembly, modeling, hair, rigging/skinning, posing, and texturing for the characters in the scene.

Colleen Larson and Darcy Korch were a tremendous help and took over the last three characters near the end of production. It was awesome to work with them on this project. The pillars were created by the awesome environment team at VASG, and the environment was handled by the talented team at Naughty Dog.

I also built bruising, sunburn, blood, and human ecorche materials for the prisoner scenes. These allowed artists to procedurally paint those elements onto the characters. The ecorche setup let artists paint through layers of human anatomy to add depth to the gore. Blood could be painted dynamically to appear pooled or dried, depending on brush opacity in Painter. Bruising included three variations, each covering different levels of damage. These materials were created in Designer and Painter for use in Substance Painter.`,
          images: [
            { src: "Images/4TheLastOfUsPart2/2Prisoners/keegan-edwards-prisoners-0000-layer-comp-1.jpg", title: "Prisoners 01", text: "" },
            { src: "Images/4TheLastOfUsPart2/2Prisoners/keegan-edwards-prisoners-0001-layer-comp-2.jpg", title: "Prisoners 02", text: "" },
            { src: "Images/4TheLastOfUsPart2/2Prisoners/keegan-edwards-prisoners-0002-layer-comp-3.jpg", title: "Prisoners 03", text: "" },
            { src: "Images/4TheLastOfUsPart2/2Prisoners/keegan-edwards-prisoners-0003-layer-comp-4.jpg", title: "Prisoners 04", text: "" },
            { src: "Images/4TheLastOfUsPart2/2Prisoners/keegan-edwards-prisoners-0004-layer-comp-5.jpg", title: "Prisoners 05", text: "" },
            { src: "Images/4TheLastOfUsPart2/2Prisoners/keegan-edwards-prisoners-0005-layer-comp-6.jpg", title: "Prisoners 06", text: "" },
            { src: "Images/4TheLastOfUsPart2/2Prisoners/keegan-edwards-prisoners-0006-layer-comp-7.jpg", title: "Prisoners 07", text: "" },
            { src: "Images/4TheLastOfUsPart2/2Prisoners/keegan-edwards-prisoners-0007-layer-comp-8.jpg", title: "Prisoners 08", text: "" },
            { src: "Images/4TheLastOfUsPart2/2Prisoners/keegan-edwards-prisoners-0008-layer-comp-9.jpg", title: "Prisoners 09", text: "" }
          ]
        },
        {
          id: "tlou-part-2-prisoners-escape",
          title: "Prisoners Escape",
          text: `I had the great fortune of working on The Last of Us Part II. The base models were provided by Naughty Dog, and my role was to assemble the character look and weather the characters.

I did not work on the environment, Ellie, or Ian in this scene. That work was completed by the artists at Naughty Dog.`,
          images: [
            { src: "Images/4TheLastOfUsPart2/3Prisoners Escape/keegan-edwards-prisonerscaptured-masked.jpg", title: "Captured Masked", text: "" },
            { src: "Images/4TheLastOfUsPart2/3Prisoners Escape/keegan-edwards-prisonerscaptured.jpg", title: "Captured", text: "" }
          ]
        }
      ]
    },
    {
      id: "call-of-duty",
      title: "Call of Duty: WW2",
      disclaimerOwner: "Activision",
      banner: "Images/5CallOfDuty/Banner.jpg",
      projects: [
        {
          id: "cod-splash",
          title: "United Front",
          thumbnailPosition: "top",
          text: `I had the opportunity to work on splash art for the United Front DLC. I posed the characters and contributed to their lighting.`,
          images: [
            { src: "Images/5CallOfDuty/1Splash/XLWglaOdZUL8Dor76Hy1BQt8AuHB3UUb.jpg", title: "Splash Art", text: "" },

          ]
        },
        {
          id: "cod-ingame",
          title: "In Game Characters",
          thumbnailPosition: "top",
          text: `This is a small selection of characters I worked on for Call of Duty: WWII. I built materials used by the character art team for various reward types, as well as grunge smart materials that could be layered on top of characters for different reward levels.

I also built a process for camouflage sets that used secondary UV sets to speed up production while keeping the memory footprint low for the texel density required on each character. I modeled, textured, and completed first-pass skinning on the characters as well.`,
          images: [
            { src: "Images/5CallOfDuty/3Ingame/EnglishComando.png", title: "English Commando", text: "" },
            { src: "Images/5CallOfDuty/3Ingame/EnglishDesert.png", title: "English Desert", text: "" },
            { src: "Images/5CallOfDuty/3Ingame/EnglishPilot.png", title: "English Pilot", text: "" },
            { src: "Images/5CallOfDuty/3Ingame/GermanOfficer.png", title: "German Officer", text: "" },
            { src: "Images/5CallOfDuty/3Ingame/GermanOfficer2.png", title: "German Officer 2", text: "" },
            { src: "Images/5CallOfDuty/3Ingame/NetherlandsInfantry.png", title: "Netherlands Infantry", text: "" },
            { src: "Images/5CallOfDuty/3Ingame/PolishInfantry.png", title: "Polish Infantry", text: "" },
            { src: "Images/5CallOfDuty/3Ingame/RussianInfantry.png", title: "Russian Infantry", text: "" },
            { src: "Images/5CallOfDuty/3Ingame/RussianResistance.png", title: "Russian Resistance", text: "" }
          ]
        },
        {
          id: "cod-sculpts",
          title: "Character Sculpts",
          text: `These are character art sculpts I worked on for Call of Duty: WWII. I used Marvelous Designer and built custom patterns with morph targets to create accurate fabric compression as the clothing reacted to the character's kit.

I also sculpted, retopologized, UVed, baked, textured, skinned, and integrated the characters into the game.`,
          thumbnailPosition: "top",
          images: [
            { src: "Images/5CallOfDuty/2Sculpts/aus_infantry.png", title: "Australian Infantry", text: "" },
            { src: "Images/5CallOfDuty/2Sculpts/eng_summer.png", title: "English Summer", text: "" },
            { src: "Images/5CallOfDuty/2Sculpts/ger_super.png", title: "German Super", text: "" },
            { src: "Images/5CallOfDuty/2Sculpts/ger_valk.png", title: "German Valkyrie", text: "" },
            { src: "Images/5CallOfDuty/2Sculpts/net_infantry.png", title: "Netherlands Infantry", text: "" },
            { src: "Images/5CallOfDuty/2Sculpts/rus_female.png", title: "Russian Female", text: "" },
            { src: "Images/5CallOfDuty/2Sculpts/usa_monty.png", title: "USA Monty", text: "" },
            { src: "Images/5CallOfDuty/2Sculpts/usa_winter.png", title: "USA Winter", text: "" }
          ]
        },

      ]
    }
  ]
};
