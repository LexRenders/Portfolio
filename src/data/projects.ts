export interface Project {
    name: string;
    title: string;
    description: string;
    imageUrl: string;
    languages: string[];
    explanation: string;
    screenshots: string[];
    showOnInternshipPage: boolean;
    showOnHomePage: boolean;
    gitHubLink: string;
}

export const projects: Project[] = [
    {
        name: "autoaddemailmodule",
        title: "Dolibarr AutoAddEmailModule",
        description: "A module in Dolibarr to automatically attach selected documents to invoices",
        imageUrl: "../AutoAddEmailModule.png",
        languages: ["PHP", "JavaScript"],
        screenshots: ["../AutoAddEmailModule.png", "../AutoAddEmailModule2.png"],
        showOnInternshipPage: true,
        showOnHomePage: false,
        gitHubLink: "",
        explanation: `I made this project to get more familiar with Dolibarr and to learn coding in PHP. It is unfortunately not fully functional, but it did teach me a lot to work on my other Dolibarr projects. It would not be very hard for me to make it fully functional, but it would cost a fair amount of time and there was simply no need to finish it.
        
        This module gives you a menu where you can upload documents and select where you want to automatically add them to(first screenshot). Currently only the invoice attachment works, you can see this in action on the second screenshot.`,
    },
    {
        name: "timelinemodule",
        title: "Dolibarr TimelineModule",
        description: "A module in Dolibarr to seriously improve customer overseeing",
        imageUrl: "../TimelineModule.png",
        languages: ["PHP", "TypeScript"],
        screenshots: ["../TimelineModule.png", "../TimelineModule2.png", "../TimelineModule3.png", "../TimelineModule4.png"],
        showOnInternshipPage: true,
        showOnHomePage: false,
        gitHubLink: "",
        explanation: `The point of this project was to create the ability to attach timelines to different customers in Dolibarr. These timelines serve to see if certain customers still require interaction. Eg: you've had a conversation with the client and they show interest, but they still need to discuss things so they tell you they will check in with you later. Now on the overview menu of this customer (screenshot 2) you can create a timeline called: “Meeting with customer”. You can then give this timeline a status. If the status is something like “Waiting for Customer” the timeline will be set to “open”. If the status is something like, “Customer is no longer interested,” the timeline will be closed.
        
        Then on the main page of the timeline module (screenshot 1) you can find an overview of all timelines created for all customers so you have a good overview of what clients still require your attention. Here you can also sort them by customer name, timeline name or status name. By default, the main page only contains the open timelines. You can use the checkbox at the top right to show the closed timelines as well, they will appear below the open timelines.
        
        We can also use the buttons on the right of the table to modify, delete and also view each timeline. When we go to view a timeline we arrive at the detail page of a timeline (screenshot 3), here we can add files to the timeline and also events. These events in turn have their own detail page (screenshot 4) where files can also be saved for each event.`,
    },
    {
        name: "bettermailtrackingmodule",
        title: "Dolibarr BetterMailTrackingModule",
        description: "A module in Dolibarr for a better overview of your sent emails",
        imageUrl: "../BetterMailTrackingModule.png",
        languages: ["PHP", "TypeScript"],
        screenshots: ["../BetterMailTrackingModule.png"],
        showOnInternshipPage: true,
        showOnHomePage: false,
        gitHubLink: "",
        explanation: `This module for Dolibarr creates an extra column in the tables that list your invoices, orders and proposals so you can see when you have sent the email with the corresponding document. Underneath the date you first sent the email, you will also find the last reminder you sent(if you have at least sent it twice), with an R- in front of it
        
        So in this example(screenshot) you can see for invoice 3, the "28-05-2025 20:19:18" is the date you first sent the invoice to the client. The R-28-05-2025 20:19:18 is the date of the last reminder that was sent.`,
    },
    {
        name: "pongbyfotydot",
        title: "Pong By Fotydot",
        description: "Its the famous game Pong, but made by Fotydot (me) :)",
        imageUrl: "../PongByFotydot2.png",
        languages: ["C#", "Unity"],
        screenshots: ["../PongByFotydot.png", "../PongByFotydot1.png", "../PongByFotydot2.png"],
        showOnInternshipPage: false,
        showOnHomePage: true,
        gitHubLink: "https://github.com/LexRenders/UnityGames",
        explanation: `This game of the result of starting to work with Unity. If you want to try it out for yourself go to the GitHub page(link above).`,
    },
    {
        name: "fotydotgame",
        title: "FotydotGame",
        description: "This is my own game I created",
        imageUrl: "../FotydotGame1.png",
        languages: ["C#", "Unity"],
        screenshots: ["../FotydotGame.png", "../FotydotGame1.png", "../FotydotGame2.png"],
        showOnInternshipPage: false,
        showOnHomePage: true,
        gitHubLink: "https://github.com/LexRenders/UnityGames",
        explanation: `This game is the result of me further experimenting the possibilities in Unity. If you want to try it out for yourself go to the GitHub page(link above).`,
    },
    {
        name: "steamdiscountviewer",
        title: "Steam Discount Viewer",
        description: "An application for viewing steam game discounts",
        imageUrl: "../SteamDiscountViewer.png",
        languages: ["Astro", "JavaScript", "TypeScript"],
        screenshots: ["../SteamDiscountViewer.png"],
        showOnInternshipPage: false,
        showOnHomePage: true,
        gitHubLink: "https://github.com/LexRenders/SteamDiscountViewer",
        explanation: `This application uses Puppeteer to scrape the top 100 best selling games on Steam and then displays them on a page with a filter option on the name and a slider to filter the discountpercentage. `,
    },
];
