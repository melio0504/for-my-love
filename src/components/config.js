const config = {
  /* 
  ████████████████████████████████████████
  🔧 BASIC SETTINGS (EDIT FREELY)
  ████████████████████████████████████████
  */

  // 🔐 Passcode Page
  correctPasscode: "0122", // Change this to any 4-digit code (the passcode for access)
  passcodeTitle: "Enter Passcode", // Title displayed on the passcode entry page
  successMessage: "Yipeeeeeeeeeeee!!", // Message shown upon successful passcode entry
  redirectMessage: "Redirecting...", // Message displayed while redirecting after success
  incorrectPasscodeMessage: "Incorrect passcode, hint: our special day!", // Message shown for incorrect passcode
  cancelButtonText: "Clear", // Text for the cancel button

  // 🔍 Question Page
  searchPlaceholder: "Search Google or type a URL", // Placeholder text in the search input
  trendingTitle: "Trending searches", // Title for the trending searches section
  trendingSearches: [
    "Why is my boyfriend so cutie patootie?", // Example trending search query
    "Why do I look so pretty?",
    "What does our future look like?",
    "Does Romelio love me so much? (ABA OO! DI NA DAPAT TINATANONG YAN)",
    "Sauce ba ang inuuna sa Pancit Canton o noodles?",
    "Neki itlog alog alog",
  ],
  proTip: 'Pro tip: try searching "How long have we been together?" <3', // Helpful tip for users

  // ⏳ Timer Page
  anniversaryDate: "2024-01-22", // 📅 Set your anniversary date here (used for the timer)
  timerTitle: "We've been together for:", // Title displayed on the timer page
  timerMessage: "... and still counting! And it will never stop in our lifetime. Hanggang kamatayan na to!", // Message shown alongside the timer
  timeUnits: {
    days: "Days", // Label for days in the timer
    hours: "Hours", // Label for hours in the timer
    minutes: "Minutes", // Label for minutes in the timer
    seconds: "Seconds", // Label for seconds in the timer
  },

  // 📸 Recap Page
  recapTitle: "Let's look back on what happened last year!", // Title for the recap page
  clickMeText: "Click me!", // Text prompting users to interact

  recapSections: [
    { label: "Messages", path: "/recap/message", icon: "Message" }, // Section for messages
    { label: "Pictures", path: "/recap/pictures", icon: "Image" }, // Section for pictures
    { label: "Music", path: "/recap/music", icon: "Music" }, // Section for music
  ],

    // 📝 Message Recap Page
    messageTitle: "Our Messages", // Title for the messages recap page
    messageGallery: [
      { title: "November 16, 2023", description: "Our first date! Naalala ko pa yung mga panahon na kinikilala palang natin yung isa't isa. Ang cute natin dito hehe." }, // Message entry
      { title: "January 22, 2024", description: "It's official! Grabe mahigit isang taon na pala nakalipas. Ang bilis ng takbo ng oras. Sana makamit natin lahat ng mga pangarap natin sa buhay. Note: first time kong tanggalin face mask ko dito hehe" },
      { title: "January 24, 2025", description: "Our first anniversary! Fresh pa rin sa memory ko yung mga bagay na ginawa natin sa buong taon. Sana hindi ka magsawa sa akin ha. LOOK AT US! We look so mature here! Handang handa na kong harapin lahat ng kasama ka." },
    ],
  
    // 📸 Picture Recap Page
    pictureTitle: "Our Pictures", // Title for the pictures recap page
    pictureGallery: [
      { title: "February 14, 2024", description: "Valentine's Day 💕 Bagay na bagay talaga tayo! Memorable yung parehas pa tayo ng gift dito huhu buti nalang hindi same song yung music box na binili nating dalawa. KYOOOOT!" }, // Picture entry
      { title: "July 27, 2024", description: "Pinto Art Museum! Grabe naka-dalawang balik tayo dito kasi nalaman natin na sarado pala sya nung araw yon huhu. Literal na nag-Antipolo lang tayo para kumain sa 711. Sana makabalik tayo sa Antipolo kasi malayo sya sa syudad." },
      { title: "December 14, 2024", description: "Stardew Valley! Gusto kong ilagay dito yung mga gaming memories natin. Isa ito sa mga bagay na nagpalapit sa ating dalawa. Gamer god ka talaga mahal ko! Ang lakas mo! Super worth it talaga ng pagbili natin ng game na 'to." },
    ],

    // 🎵 Music Page
  musicTitle: "Songs that remind me of you", // Title for the music page
  musicGallery: [
    {
      title: "Be With You", // Title of the song
      artist: "The Ridley", // Artist of the song
      left: "5%", // Positioning on the page
      top: "5%", // Positioning on the page
    },
    {
      title: "Dito Muna",
      artist: "Munimuni",
      left: "40%",
      top: "15%",
    },
    {
      title: "Here, There And Everywhere",
      artist: "The Beatles",
      left: "15%",
      top: "40%",
    },
    {
      title: "Pag-ibig Fortune Cookie",
      artist: "MNL48",
      left: "30%",
      top: "75%",
    },
    {
      title: "Kay Ganda Mo",
      artist: "Frank Ely",
      left: "5%",
      top: "65%",
    },
    {
      title: "When Will My Life Begin?",
      artist: "Mandy Moore",
      left: "25%",
      top: "90%",
    },
    {
      title: "Mamma Mia",
      artist: "ABBA",
      left: "35%",
      top: "50%",
    },
    {
      title: "Popular",
      artist: "Ariana Grande",
      left: "10%",
      top: "25%",
    },
  ],

  // 💌 Love Letter Page
  loveLetterMessage: "Happy Birthday Love! 💖 I hope you enjoy your day! I love you so much.", // Message displayed on the love letter page

  // 🎇 Closing Page
  closingMessage: "Thank you for everything, my love! 💖 I wish you many wonderful years ahead! Aalagaan at mamahalin kita hanggang sa huling hininga mo.", // Closing message displayed

  /* 
  ████████████████████████████████████████
  ⚠️ ADVANCED SETTINGS (DO NOT TOUCH UNLESS YOU KNOW WHAT YOU'RE DOING)
  ████████████████████████████████████████
  */

  // 📌 Paths (Only change if you are a developer or modifying routes)
  redirectPath: "/question", // Path to redirect after passcode entry
  timerRedirectPath: "/timer", // Path to redirect to the timer page
  questionRedirectPath: "/question", // Path to redirect to the question page
  recapRedirectPath: "/recap", // Path to redirect to the recap page
  recapPreviousPage: "/timer", // Path to the previous page in the recap
  recapNextPage: "/letter", // Path to the next page in the recap
  letterNextPage: "/closing", // Path to the next page after the letter
  letterPreviousPage: "/letter", // Path to the previous page before the letter
  previousPageText: "Previous page", // Text for the previous page button
  nextPageText: "Next page", // Text for the next page button

  // 🔍 Search Queries (Only change if modifying search functionality)
  correctSearchQueries: [
    "How long have we been together?", // Example of a correct search query
    "how long have we been together", // Another example of a correct search query
  ],
};

export default config;
