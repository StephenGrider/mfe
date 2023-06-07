import React from "react";

// @material-ui/icons
import CardTravel from "@material-ui/icons/CardTravel";
import Extension from "@material-ui/icons/Extension";
import Fingerprint from "@material-ui/icons/Fingerprint";
import FlightLand from "@material-ui/icons/FlightLand";
import Build from "@material-ui/icons/Build";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";

// ##############################
// // // stories for RTLSupport view
// #############################

const rtlStories = [
  {
    // First story
    inverted: true,
    badgeColor: "danger",
    badgeIcon: CardTravel,
    title: "جهة أي",
    titleColor: "danger",
    body: (
      <p>
        قام كل ماذا العصبة اوروبا. أي جورج العالمي أخر, كان تم أطراف القوى
        استبدال. أسر ميناء تكتيكاً الجديدة، كل. جُل اللا التكاليف بـ, عرفها
        النزاع لليابان بـ أضف. انتهت المدن الثالث من وقد.وقبل قادة إحتار عن أخر.
        حين ونتج أخرى قد. بالعمل بالمطالبة فقد قد. عن جنوب ومضى الشتاء.
      </p>
    ),
    footerTitle: "مدن أن هُزم سكان, مكن."
  },
  {
    // Second story
    inverted: true,
    badgeColor: "success",
    badgeIcon: Extension,
    title: "جُل حكومة",
    titleColor: "success",
    body: (
      <p>
        عل فكانت الثقيلة بلا. شيء بخطوط بالرّغم التبرعات عن, يطول بأيدي لم كلّ.
        معقل الغالي واتّجه لم وتم, أن الصفحة بالمحور حول, بال مرمى الصفحات
        قُدُماً و. الأخذ سبتمبر العالم من ذلك. ان يبق شدّت الأبرياء, الى الربيع،
        والمانيا كل. ودول الأهداف التقليدي عل أضف, كلا يقوم الأخذ الآلاف بل.
      </p>
    )
  },
  {
    // Third story
    inverted: true,
    badgeColor: "info",
    badgeIcon: Fingerprint,
    title: "هذا غينيا",
    titleColor: "info",
    body: (
      <p>
        جهة المارق والديون التقليدية في, هو وترك المجتمع بريطانيا ذلك, لمّ ما
        العالم، اليابان،. ٣٠ فقامت أوروبا مشاركة بعد, ٢٠٠٤ الجو مساعدة ما حدى.
        في عليها وبحلول معارضة بعض. عن الأرض وبداية العمليات ولم. الجو جديداً
        الأوروبيّون أم به،. ثم التي نتيجة الآلاف جعل, عن المارق السادس قام. ما
        أخر فقامت الأجل الشرق،, فصل كل وسوء الأرواح. ثم بعد وشعار بأيدي. قبل
        وكسبت الغالي الولايات بل, ٣٠ أمّا أخرى لأداء أضف. هو منتصف معزّزة على.
        بـ أفريقيا التغييرات مما, أثره،.
      </p>
    ),
    footer: (
      <CustomDropdown
        rtlActive
        buttonIcon={Build}
        buttonProps={{
          round: true,
          style: { marginBottom: "0" },
          color: "info"
        }}
        dropdownList={[
          "ان",
          "إجلاء لفرنسا",
          "أواخر الأرض بل",
          { divider: true },
          "عل اليها"
        ]}
      />
    )
  }
];

// ##############################
// // // stories for Widgets view
// #############################

const widgetStories = [
  {
    // First story
    inverted: true,
    badgeColor: "danger",
    badgeIcon: CardTravel,
    title: "Some Title",
    titleColor: "danger",
    body: (
      <p>
        Wifey made the best Father{"'"}s Day meal ever. So thankful so happy so
        blessed. Thank you for making my family We just had fun with the
        “future” theme !!! It was a fun night all together ... The always rude
        Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in
        downtown.
      </p>
    ),
    footerTitle: "11 hours ago via Twitter"
  },
  {
    // Second story
    inverted: true,
    badgeColor: "success",
    badgeIcon: Extension,
    title: "Another One",
    titleColor: "success",
    body: (
      <p>
        Thank God for the support of my wife and real friends. I also wanted to
        point out that it’s the first album to go number 1 off of streaming!!! I
        love you Ellen and also my number one design rule of anything I do from
        shoes to music to homes is that Kim has to like it....
      </p>
    )
  },
  {
    // Third story
    inverted: true,
    badgeColor: "info",
    badgeIcon: Fingerprint,
    title: "Another Title",
    titleColor: "info",
    body: (
      <div>
        <p>
          Called I Miss the Old Kanye That’s all it was Kanye And I love you
          like Kanye loves Kanye Famous viewing @ Figueroa and 12th in downtown
          LA 11:10PM
        </p>
        <p>
          What if Kanye made a song about Kanye Royère doesn{"'"}t make a Polar
          bear bed but the Polar bear couch is my favorite piece of furniture we
          own It wasn’t any Kanyes Set on his goals Kanye
        </p>
      </div>
    ),
    footer: (
      <CustomDropdown
        buttonIcon={Build}
        buttonProps={{
          round: true,
          style: { marginBottom: "0" },
          color: "info"
        }}
        dropdownList={[
          "Action",
          "Another action",
          "Something else here",
          { divider: true },
          "Separated link"
        ]}
      />
    )
  }
];

// ##############################
// // // stories for Timeline view
// #############################

const stories = [
  {
    // First story
    inverted: true,
    badgeColor: "danger",
    badgeIcon: CardTravel,
    title: "Some Title",
    titleColor: "danger",
    body: (
      <p>
        Wifey made the best Father{"'"}s Day meal ever. So thankful so happy so
        blessed. Thank you for making my family We just had fun with the
        “future” theme !!! It was a fun night all together ... The always rude
        Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in
        downtown.
      </p>
    ),
    footerTitle: "11 hours ago via Twitter"
  },
  {
    // Second story
    badgeColor: "success",
    badgeIcon: Extension,
    title: "Another One",
    titleColor: "success",
    body: (
      <p>
        Thank God for the support of my wife and real friends. I also wanted to
        point out that it’s the first album to go number 1 off of streaming!!! I
        love you Ellen and also my number one design rule of anything I do from
        shoes to music to homes is that Kim has to like it....
      </p>
    )
  },
  {
    // Third story
    inverted: true,
    badgeColor: "info",
    badgeIcon: Fingerprint,
    title: "Another Title",
    titleColor: "info",
    body: (
      <div>
        <p>
          Called I Miss the Old Kanye That’s all it was Kanye And I love you
          like Kanye loves Kanye Famous viewing @ Figueroa and 12th in downtown
          LA 11:10PM
        </p>
        <p>
          What if Kanye made a song about Kanye Royère doesn{"'"}t make a Polar
          bear bed but the Polar bear couch is my favorite piece of furniture we
          own It wasn’t any Kanyes Set on his goals Kanye
        </p>
      </div>
    ),
    footer: (
      <CustomDropdown
        buttonIcon={Build}
        buttonProps={{
          round: true,
          style: { marginBottom: "0" },
          color: "info"
        }}
        dropdownList={[
          "Action",
          "Another action",
          "Something else here",
          { divider: true },
          "Separated link"
        ]}
      />
    )
  },
  {
    // Fourth story
    badgeColor: "warning",
    badgeIcon: FlightLand,
    title: "Another One",
    titleColor: "warning",
    body: (
      <p>
        Tune into Big Boy{"'"}s 92.3 I{"'"}m about to play the first single from
        Cruel Winter also to Kim’s hair and makeup Lorraine jewelry and the
        whole style squad at Balmain and the Yeezy team. Thank you Anna for the
        invite thank you to the whole Vogue team
      </p>
    )
  }
];

// ##############################
// // // data for populating the calendar in Calendar view
// #############################

var today = new Date();
var y = today.getFullYear();
var m = today.getMonth();
var d = today.getDate();

const events = [
  {
    title: "All Day Event",
    allDay: true,
    start: new Date(y, m, 1),
    end: new Date(y, m, 1),
    color: "default"
  },
  {
    title: "Meeting",
    start: new Date(y, m, d - 1, 10, 30),
    end: new Date(y, m, d - 1, 11, 30),
    allDay: false,
    color: "green"
  },
  {
    title: "Lunch",
    start: new Date(y, m, d + 7, 12, 0),
    end: new Date(y, m, d + 7, 14, 0),
    allDay: false,
    color: "red"
  },
  {
    title: "Nud-pro Launch",
    start: new Date(y, m, d - 2),
    end: new Date(y, m, d - 2),
    allDay: true,
    color: "azure"
  },
  {
    title: "Birthday Party",
    start: new Date(y, m, d + 1, 19, 0),
    end: new Date(y, m, d + 1, 22, 30),
    allDay: false,
    color: "azure"
  },
  {
    title: "Click for Matthew Whitney",
    start: new Date(y, m, 21),
    end: new Date(y, m, 22),
    color: "orange"
  },
  {
    title: "Click for Google",
    start: new Date(y, m, 21),
    end: new Date(y, m, 22),
    color: "rose"
  }
];

// ##############################
// // // Tasks for TasksCard - see Widget view
// #############################

var bugs = [
  'Sign contract for "What are conference organizers afraid of?"',
  "Lines From Great Russian Literature? Or E-mails From My Boss?",
  "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
  "Create 4 Invisible User Experiences you Never Knew About"
];
var website = [
  "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
  'Sign contract for "What are conference organizers afraid of?"'
];
var server = [
  "Lines From Great Russian Literature? Or E-mails From My Boss?",
  "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
  'Sign contract for "What are conference organizers afraid of?"'
];

// ##############################
// // // Tasks for TasksCard - see RTLSupport view
// #############################

var rtlBugs = [
  "فقد لمحاكم الاندونيسية, بلاده بالتوقيع تم يبق. جعل السبب وفرنسا الصينية أي.",
  "بحث. كل مما ٢٠٠٤ شاسعة العسكري جعل السبب وفرنسا الصينية أي.",
  "تسبب أفريقيا ضرب عن, عن إنطلاق جعل السبب وفرنسا الصينية أي.",
  "قدما مليون بين عن, مرجع منتصف الأمريكية جعل السبب وفرنسا الصينية أي."
];
var rtlWebsite = [
  "قدما مليون بين عن, مرجع منتصف الأمريكية جعل السبب وفرنسا الصينية أي.",
  "قدما مليون بين عن, مرجع منتصف الأمريكية جعل السبب وفرنسا الصينية أي."
];
var rtlServer = [
  "قدما مليون بين عن, مرجع منتصف الأمريكية جعل السبب وفرنسا الصينية أي.",
  "قدما مليون بين عن, مرجع منتصف الأمريكية جعل السبب وفرنسا الصينية أي.",
  "قدما مليون بين عن, مرجع منتصف الأمريكية جعل السبب وفرنسا الصينية أي."
];

// ##############################
// // // data for datatables.net in DataTables view
// #############################

const dataTable = {
  headerRow: ["Name", "Position", "Office", "Age", "Actions"],
  footerRow: ["Name", "Position", "Office", "Age", "Actions"],
  dataRows: [
    ["Tiger Nixon", "System Architect", "Edinburgh", "61"],
    ["Garrett Winters", "Accountant", "Tokyo", "63"],
    ["Ashton Cox", "Junior Technical Author", "San Francisco", "66"],
    ["Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "22"],
    ["Airi Satou", "Accountant", "Tokyo", "33"],
    ["Brielle Williamson", "Integration Specialist", "New York", "61"],
    ["Herrod Chandler", "Sales Assistant", "San Francisco", "59"],
    ["Rhona Davidson", "Integration Specialist", "Tokyo", "55"],
    ["Colleen Hurst", "Javascript Developer", "San Francisco", "39"],
    ["Sonya Frost", "Software Engineer", "Edinburgh", "23"],
    ["Jena Gaines", "Office Manager", "London", "30"],
    ["Quinn Flynn", "Support Lead", "Edinburgh", "22"],
    ["Charde Marshall", "Regional Director", "San Francisco", "36"],
    ["Haley Kennedy", "Senior Marketing Designer", "London", "43"],
    ["Tatyana Fitzpatrick", "Regional Director", "London", "19"],
    ["Michael Silva", "Marketing Designer", "London", "66"],
    ["Paul Byrd", "Chief Financial Officer (CFO)", "New York", "64"],
    ["Gloria Little", "Systems Administrator", "New York", "59"],
    ["Bradley Greer", "Software Engineer", "London", "41"],
    ["Dai Rios", "Personnel Lead", "Edinburgh", "35"],
    ["Jenette Caldwell", "Development Lead", "New York", "30"],
    ["Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "40"],
    ["Caesar Vance", "Pre-Sales Support", "New York", "21"],
    ["Doris Wilder", "Sales Assistant", "Sidney", "23"],
    ["Angelica Ramos", "Chief Executive Officer (CEO)", "London", "47"],
    ["Gavin Joyce", "Developer", "Edinburgh", "42"],
    ["Jennifer Chang", "Regional Director", "Singapore", "28"],
    ["Brenden Wagner", "Software Engineer", "San Francisco", "28"],
    ["Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "48"],
    ["Shou Itou", "Regional Marketing", "Tokyo", "20"],
    ["Michelle House", "Integration Specialist", "Sidney", "37"],
    ["Suki Burks", "Developer", "London", "53"],
    ["Prescott Bartlett", "Technical Author", "London", "27"],
    ["Gavin Cortez", "Team Leader", "San Francisco", "22"],
    ["Martena Mccray", "Post-Sales support", "Edinburgh", "46"],
    ["Unity Butler", "Marketing Designer", "San Francisco", "47"],
    ["Howard Hatfield", "Office Manager", "San Francisco", "51"],
    ["Hope Fuentes", "Secretary", "San Francisco", "41"],
    ["Vivian Harrell", "Financial Controller", "San Francisco", "62"],
    ["Timothy Mooney", "Office Manager", "London", "37"],
    ["Jackson Bradshaw", "Director", "New York", "65"],
    ["Olivia Liang", "Support Engineer", "Singapore", "64"]
  ]
};

export {
  // data for React Big Calendar in Calendar view
  events,
  // stories for RTLSupport view
  rtlStories,
  // stories for Widgets view
  widgetStories,
  // stories for Timeline view
  stories,
  // these 3 are used to create the tasks lists in TasksCard - Widget view
  bugs,
  website,
  server,
  // these 3 are used to create the tasks lists in TasksCard - RTLSupport view
  rtlBugs,
  rtlWebsite,
  rtlServer,
  // data for datatables.net in DataTables view
  dataTable
};
