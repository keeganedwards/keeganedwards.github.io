window.PORTFOLIO_DATA = {
  brand: {
    name: "Keegan Edwards",
    title: "Senior Technical Artist",
    email: "mailto:keegan.edwards@gmail.com",
    linkedin: "https://www.linkedin.com/in/keegan-edwards/",
    resume: "https://media.licdn.com/dms/image/v2/D562DAQESXdsCxMWtnQ/profile-treasury-document-images_1280/B56ZVnUfPfGsAU-/1/1741195180682?e=1778716800&v=beta&t=D638ywrxIweerKjrIsqBV2RGnJujKU8NjDu6Hzi0f4I"
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
      id: "multiversus",
      title: "MultiVersus",
      disclaimerOwner: "Warner Brothers",
      banner: "Images/1Multiversus/Banner.jpg",
      projects: [
        {
          id: "multiversus-lighting-material-overhaul",
          title: "Lighting and Material Overhaul",
          text: `Going from beta to release we wanted to change the characters materials to have a more dynamic and physical look. As well as rebuilding the lighting system that was there to work better with the entire cast of characters. I worked with the character team and Art direction to Update workflows and Materials to help achieve this visual overhaul. As well as building the lighting systems that allowed for various character lighting throughout the game.`,
          images: [
            { src: "Images/1Multiversus/1LightingAndMaterialOverhaul/MultiVersusVisualAndCharacterLightingOverhaul.gif", title: "Lighting and Material Overhaul", text: "" }
          ]
        },
        {
          id: "multiversus-battle-pass-fighter-road",
          title: "Battle Pass and Fighter Road",
          thumbnail: "Images/1Multiversus/Override/BattlePass.png",
          text: `This initially started as a small strike team to get the golden path working for the menus I built the menu scene manager which managed menu, materials, scene and reward transitions. It also controlled how actors would async load into the scene while hovering or interacting with different elements of the UI.`,
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
Storefront presentation work including Asset Previews, Hover states, Icons, character presentation, reward transitions, and effects.

- Built store presentation transition and asset management system.
- Supported Reward Displays.
- Managed Icon resolution and Created tools for Reward/ Store Icons for Characters.
- Built materials for UI to have clean non aliased shapes they could build in editor.
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
          text: `I worked with animation to build them a system that allowed them to change placement delay the spawns. I  designed the system that would determine what game mode was being played which was attached to different character placement and victory/ end game arrangements. I also built out tooling to allow for animation to test this easily so they could iterate quickly and test their work in context. The tool allowed for controlling banners, characters, their skins and player nameplates.`,
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
          text: `We needed to generate a large pool of icons for the entire cast / every item / cosmetic in the game maintaining the most reuse and ability to iterate on asset placement while maintaining performance when displaying large asset pools. I built this tool which automatically would batch through framing the characters and would use that same frame if that animation was used on another skin and capture the character full body. This batched out the entire cast of characters and attached it their data assets so they could be used straight away in the store. Portraits would need to be cropped using the Cropping tools allowing quick real time changes that you could see in context. 
The tool supported swapping of lighting environments and capturing characters in different poses that could be authored for that specific pose or image that would be used for splash/ store / promotional work. 
`,
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
          text: `Problem Statement:	With an initial small team of character artists we were trying to punch above our size and working on a remaster with a smaller team trying to make a remaster of a game while pushing the quality to current gen with unique characters more characters on screen higher fidelity with less people and resources. We would need to reduce the amount of rework while allowing for the most reuse staying organized and collaborative to utilize each artists work and time to the fullest. When we began production it became clear there were improvements that could be made within the character art pipeline. We had just finished up work on The Last of Us Part 2 and found many problems that needed to be addressed.
-	Art assets were hard to find or disorganized often required interfacing with artists to find assets so they could be reused. Even when assets were organized knowing the status and what the asset looked like meant time browsing through files task tracking software. This has a compounding effect people were not reusing each others assets and creating rework.
-	Building an asset often took multiple disciplines art to make the asset rigging to skin it and tech art to make the game data to see the results. This meant for long iteration and developers making efforts not at the core of their discipline. Artists want to make art! 
-	Avoid Crunch! We wanted to be able to track the trajectory of the assets and their completion. This would allow us to plan accordingly and make it easy for artist to update the status of an asset.
-	Updates on the batches of the cast was something that happened a repeatedly at the end of development. UV's needing updates, Issues with Actor Settings and of course reskinning due to model changes.
-	Large amounts of time was spent on bugs for crashing between two assets within the character. Not all assets would fit together properly, the underlying geometry would not be removed causing interpenetration issues when the character would animate. 
There were also issues we would have that were unique to the project.
-	Due to the multiple teams working on the project. There were multiple version control software's and repositories. It made working with these systems difficult to keep everything organized.
-	We would eventually need to move databases and file locations for huge segments of the project. 
-	Moving to work from home we had issues with long latency times when using version control making some large file updates take a long time.`,
          images: [
            { src: "Images/2TheLastOfUsPart1/3CharacterAssetBrowser/CabbDemonstration.png", title: "Character Asset Browser", text: "" }
          ]
        },
        {
          id: "tlou-part-1-character-asset-browser",
          title: "Character Asset Browser",
          text: `Character asset browsing and production support work.`,
          images: [
            { src: "Images/2TheLastOfUsPart1/3CharacterAssetBrowser/CabbDemonstration.png", title: "Character Asset Browser", text: "" }
          ]
        }
      ]
    },
    {
      id: "ashes-of-creation",
      title: "Ashes of Creation",
      disclaimerOwner: "Intrepid Studios",
      bannerPosition: "top",
      banner: "Images/3AshesOfCreation/Banner.png",
      projects: [
        {
          id: "ashes-harbingers",
          title: "Harbingers",
          text: `Harbinger presentation and supporting technical art work.`,
          images: [
            { src: "Images/3AshesOfCreation/1Harbingers/Harbingers.png", title: "Harbingers", text: "" },
            { src: "Images/3AshesOfCreation/1Harbingers/maxresdefault.jpg", title: "Harbingers Preview", text: "" },
            { src: "Images/3AshesOfCreation/1Harbingers/Screenshot 2026-04-29 121732.png", title: "Harbingers Screenshot", text: "" }
          ]
        },
        {
          id: "ashes-hlods",
          title: "HLODs",
          text: `Hierarchical LOD setup and visual validation work.`,
          images: [
            { src: "Images/3AshesOfCreation/2Hlods/HlodPcitures2.png", title: "HLOD View", text: "" },
            { src: "Images/3AshesOfCreation/2Hlods/HlodPcitures4.png", title: "HLOD Comparison", text: "" }
          ]
        },
        {
          id: "ashes-optimization",
          title: "Optimization",
          text: `Optimization-oriented technical art work and scene validation.`,
          images: [
            { src: "Images/3AshesOfCreation/3Optimization/HlodPcitures1.png", title: "Optimization View", text: "" },
            { src: "Images/3AshesOfCreation/3Optimization/HlodPcitures3.png", title: "Optimization Comparison", text: "" }
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
          text: `I had the great fortune to work on Young Ellie from The Last of Us Part 2 with the wonderfully talented Naughty Dog Team! I worked on a portion of the model which was scanned by our awesome team at VSAG, I sweater model and textures for Ellie the rest was by the fantastic artists at Naughty Dog.`,
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
          text: `I had the privilege to work with Naughty Dog on The Last of Us Part 2. This scene was a huge team effort, I worked on the assembly, modeling, hair, rigging/skinning, posing, texturing of the characters in the scene Colleen Larson and Darcy Korch were a tremendous help and took over on the last three characters at the end of production. It was awesome to work with them on this fantastic project. The pillars were worked on by the awesome environment team at VASG and the environment was handled by the talented team at Naughty dog!
I built out a bruising sunburn blood and human ecroshe for the prisoner scenes. These allowed for Procedural painting of all of these elements on the character. The ecroshe allowed the artist to paint through each layer of the human anatomy to add to the depth for the gore. Blood could dynamically be painted to pool up or be dried out depending on opacity of the brush in painter. Bruising also had 3 variations and each covered different levels of damage. These were all made within designer and painter and used within substance painter.`,
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
          text: `I had the great fortune of working on The Last of Us Part 2. The base Models were provided by Naughty Dog and It was my job to assemble the look and weather the characters. I did not work on the environment Ellie or Ian in this scene that work was done by the Artists at Naughty Dog.`,
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
          text: `I had the Oportunity to work on splash art for the United Front DLC I posed and contributed to lighting the characters.`,
          images: [
            { src: "Images/5CallOfDuty/1Splash/XLWglaOdZUL8Dor76Hy1BQt8AuHB3UUb.jpg", title: "Splash Art", text: "" },

          ]
        },
        {
          id: "cod-ingame",
          title: "In Game Characters",
          thumbnailPosition: "top",
          text: `This is a small selection of characters I worked on for Call of Duty WW2 I built materials that were used by the character art team for various reward types as well as grunge smart materials that layered on top of the characters for different reward levels. I built out a process for out camouflage sets that utilized secondary uv sets to speed up the process while keeping the memory footprint low for the textile density required for each character. I modeled textured and did first pass skinning on the characters as well.`,
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
          text: `Some character art sculpts I worked on for Call of Duty WW2 I used marvelous designer and built my own patterns with morph targets to create accurate compression for the fabric reacting to the characters kit. I also sculpted, retopologised, uved, baked, textured, skinned, and got them into game. `,
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



