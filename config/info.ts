export type Information = typeof infoConfig;

export const infoConfig = {
  name: "John-Arkerson",
  description: "Information that will go into components.",
  aboutInfo: {
    About: {
      desc: `I am a Software Developer based in the North East. While I have experience with React this is my first project in the Next.js framework`,
    },
    Volunteer: {
      year: "Winter 2019",
      title: "All Hands and Hearts",
      desc: `In December of 2019 a few cousins and I decided it would be a great opportunity to help our people after Hurricane Maria hit Puerto Rico. 
            We chose an amazing company called All Hands and Hearts. They gather volunteers from all over the world in order to help those in need. 
            Hurricane Maira devistated the island for years, leaving many without power, water or proper shelter. 
            Many homes recieved water damage both inside and out resulting in leaking roofs, crumbling walls and black mold throughout the premises. 
            The main tasks that we handled included, removing and replacing the roofing sealant, disinfect the premises of black mold and repair walls and floors.`,
    },
    Education: {
      year: "2017 - 2021",
      title: "Computer and Informatics",
      desc: `In 2017 I entered Rowan University eager to learn all I can about programming. 
            To me programming is like a jigsaw puzzle you start with an overall picture of what you want, 
            then you dive in an peace together all the different parts that you need to ultimately come to that final picture that you had envisioned. 
            In 2021, I graduated with honors (Magna Cum Laude) with a degree in Comupter and Informatics with a concentration in Cyber Security and a concentration in Management of Information Security.`,
    },
  },
  widgetInfo: [
    {
      id: "c1",
      key: "1",
      label: "Python",
      year: "3 years",
      data: ` During my development career I have created a multitue of applications for use in the factory floor. The most significant being the development of real time data applications. These applications were .exe files that were installed on each of the tools on the factory floor as well as dispatch screens mounted on the walls for operator use. The applications that were installed on the tools would take metric data generated by that specific tool and generate a multitude of plots that the engineer could use to assess if the tools performance was within the acceptable range for what was needed with the product. \n
              The application that was installed on the dispatch screens would also take metric data from the database, however, this data was an agregate of all the tools measurements. These measurements were then plotted into SPC (Statistical Process Control) charts and displayed on the screen so operators could know when they have hit there product quota as well as the if the tools needed to be adjusted for better performance.\n
              Other projects include particle density measurement applications for the factory cleanroom for upper management to assess if the air filtration systems are working properly and if not how much it would effect product manufacturing. As well as a multitude of back end programs that interacted with the React enviorments that I managed, which will be covered in the React portion of this page.`,
      image: "/python.svg",
      header_style: "card_header_one",
      button_style: "card_btn_one",
      duration: "500",
    },
    {
      id: "c3",
      key: "3",
      label: "React",
      year: "3 years",
      data: ` In my previous role, I was in charge of developement and management of 3 different internal websites for the company that was used in each of their factories across the world. The first of these websties was a statistical datasheet generator to send to the customer upon shipment of the product. The application would allow the user to select what customer, product and shipment date the develery was scheduled for. Once confirmed the application would pull thousands of data points for each product in the shipment and caculate the needed measurements for said product and generate an excel page that could then be reviewed by the quality team.\n
              The second of these websites was a label generation application for both internal and customer use. The labels in question were generated in a programming language called ZPL II (Zebra Printing Language). The customer labels were labels that were generated in either english or chinese depending on the specified customer, the application would then take the product information and generate a label with both human readable product information as well as QR codes for easy scanning from the customer. The internal labels were generated by operators upon the recieving of a shipment into the warehouse. The user would take the shipment and scan a QR code on the box and it would generate a label that had QR code, product quantity, product code and recieve date.\n
              Once the warehouse label was generated the staff would then use the third website that I developed to help keep track of the current products in the warehouse. This application would take the generated barcode which, once scanned, would populate the page with the product that was scanned and the quantity that was to be removed for use on the factory floor. Once confirmed by the user the application would remove the needed products from the SAP system as well as the SQL database to ensure that the products that were in the warehosue were the correct quantities that are listed in both databases to ensure that there were no inconsistancies between the actual products in the factory and the count in the database.`,
      image: "/react.svg",
      header_style: "card_header_three",
      button_style: "card_btn_three",
      duration: "1000",
    },
    {
      id: "c2",
      key: "2",
      label: "SQL",
      year: "3 years",
      data: ` Throughout all the projects that I developed I had the opportunity to develop my knowledge of SQL. While database management was not my main responseablility as a developer, I got the opportunity to learn how a large compy handles their data management and how to better work with their systems throught the development of my projects. I was able to handle tasks ranging from simple user permissions to complex data backlogging and tool data upload. As you had read previously there were many projects that I worked on that handled many thousands of lines of data that was sent from a multitude of tools in the factories around the world.`,
      image: "/sql.svg",
      header_style: "card_header_two",
      button_style: "card_btn_two",
      duration: "1500",
    },
    {
      id: "c5",
      key: "5",
      label: "Azure",
      year: "3 years",
      data: ` While in my previous role, I had my first introduction to Azure. While I had no prior experience with the application I quickly understood how useful such an application could be in the developement lifecycle. Throughout my time with my previous team I got to collaborate closly and see how helpful it can be to use the embedded branching strategy that they have in palce. Having the ability to peer review updates before they go live is invaluable.\n 
              Before I left my previous employer I had to oportunity to assist in implementing a CI/CD pipline for the projects that I managed. While I am still inexperienced in this methodology, I plan on using this project to advance my knowedge on this topic. After deploying this project, my next step will be to learn all that I can about CI/CD piplines and implement them into his project to better streamline this websites development.`,
      image: "/code.svg",
      header_style: "card_header_four",
      button_style: "card_btn_four",
      duration: "2000",
    },
  ],
  componentInfo: [
    {
      label: "Profile",
      href: "/profile",
    },
  ],
  links: {
    github: "https://github.com/John-Arkerson",
    // discord: "https://discord.gg/9b6yyZKmH4",
  },
};
