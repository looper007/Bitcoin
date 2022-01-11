import React, { Component } from "react";
import Interface from "./Interface";
import TranslationTables from "./TranslationTables";
import TranslationValues from "./TranslationValues";
import "./styles.css";
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interfaces: ["Fixflex", "Andalax", "Gembucket", "Ventosanzap", "Tin"],
      TranslationTables: [
        {
          Translation: "Castor canadensis",
          Name: "Beaver, american",
          Description:
            "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
        },
        {
          Translation: "Diceros bicornis",
          Name: "Black rhinoceros",
          Description:
            "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
        },
        {
          Translation: "Alligator mississippiensis",
          Name: "American alligator",
          Description:
            "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
        },
        {
          Translation: "Upupa epops",
          Name: "Hoopoe, eurasian",
          Description:
            "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
        },
        {
          Translation: "Zalophus californicus",
          Name: "California sea lion",
          Description:
            "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
        },
      ],
      TranslationValues: [
        {
          lookupvalue: "Kirlin LLC",
          returnvalue: "Stringtough",
          productgroupid: "6899792281",
          lastuser: "Ionn",
          lastupdate: "5/6/2021",
        },
        {
          lookupvalue: "Kihn, Koch and Huels",
          returnvalue: "Redhold",
          productgroupid: "8916148863",
          lastuser: "Redhead",
          lastupdate: "7/18/2021",
        },
        {
          lookupvalue: "Kris LLC",
          returnvalue: "Asoka",
          productgroupid: "5603776218",
          lastuser: "Targe",
          lastupdate: "5/14/2021",
        },
        {
          lookupvalue: "Von-Stark",
          returnvalue: "Opela",
          productgroupid: "2156866619",
          lastuser: "Skoyles",
          lastupdate: "8/19/2021",
        },
        {
          lookupvalue: "Sipes-Grant",
          returnvalue: "It",
          productgroupid: "9120073046",
          lastuser: "Widdecombe",
          lastupdate: "6/21/2021",
        },
        {
          lookupvalue: "Stanton Group",
          returnvalue: "Viva",
          productgroupid: "9067409898",
          lastuser: "Marieton",
          lastupdate: "12/15/2021",
        },
        {
          lookupvalue: "Tromp Group",
          returnvalue: "Zaam-Dox",
          productgroupid: "4383530281",
          lastuser: "Beagen",
          lastupdate: "9/21/2021",
        },
        {
          lookupvalue: "Beahan-Simonis",
          returnvalue: "Konklux",
          productgroupid: "2652115405",
          lastuser: "Muncie",
          lastupdate: "1/16/2021",
        },
        {
          lookupvalue: "Kuvalis Inc",
          returnvalue: "Duobam",
          productgroupid: "8245714984",
          lastuser: "Cote",
          lastupdate: "9/27/2021",
        },
        {
          lookupvalue: "Schinner, Rohan and Carroll",
          returnvalue: "Overhold",
          productgroupid: "4607078166",
          lastuser: "Oels",
          lastupdate: "10/23/2021",
        },
      ],
    };
  }

  render() {
    return (
      <div className="gisInterfaceTranslationWrapper">
        <Interface interfaces={this.state.interfaces} />
        <hr />
        <TranslationTables TranslationTables={this.state.TranslationTables} />
        <hr />
        <TranslationValues TranslationValues={this.state.TranslationValues} />
      </div>
    );
  }
}

export default Index;
