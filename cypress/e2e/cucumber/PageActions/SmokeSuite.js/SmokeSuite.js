import 'cypress-iframe'
import 'cypress-file-upload';
const locators = require("../../PageElements/Locators.json")
class SmokeSuite {
  
  verifyExistingProcurement(){
    cy.get("[name='topmain']").its('0.contentDocument').its('body').find("[name='main']").its('0.contentDocument').its('body').as('iframe')
    cy.get('@iframe').find('a[target="topmain"]').eq(0).should('be.visible')
  }

  clickOnAdvertisement(){
    cy.get("[name='topmain']").its('0.contentDocument').its('body').find("[name='main']").its('0.contentDocument').its('body').as('iframe')
    cy.get('@iframe').find('#ctl00_Body_dgrd_LastAccessedProjects_ctl02_lnk_Process').click({ force: true });
  }

  navigateToPlan(){
    cy.get("[name='topmain']").its('0.contentDocument').its('body').find("[name='main']").its('0.contentDocument').its('body').as('iframe')
    cy.get('@iframe').find('td[class="menu-normal-top"]').eq(0).click();
    //plan
    cy.get('@iframe').find('span[class="label-pageheader"]').contains('Set up new procurement')
      .should('be.visible');
  }

  validatePlanTab(){
    cy.get("[name='topmain']").its('0.contentDocument').its('body').find("[name='main']").its('0.contentDocument').its('body').as('iframe')
      //Procuring organisation:
    cy.get('@iframe').find('select[id="ctl00_Body_cbo_ProcuringOrganization"]').select(1)
      .invoke("text").should('contains', "Mercell Commerce AB");
      //Name of procurement: 
    cy.get('@iframe').find('input[id="ctl00_Body_txt_Name"]').clear().type("Tendsign Automation Test");
      //Reference number: 
    cy.get('@iframe').find('input[id="ctl00_Body_txt_ReferenceNumber"]').clear().type(423423)
      //Description: 
    cy.get('@iframe').find('textarea[id="ctl00_Body_txt_Description"]').clear()
      .type("Description for the Tendsign Automation in the plan tab");
      //Allowed tender languages:
    cy.get('@iframe').find('select[id="ctl00_Body_cbo_AllowedLanguages"]')
      .select('English').invoke("text").should('contains', "English");
      //Display under Planned procurements-checkbox
    cy.get('@iframe').find('input[id="ctl00_Body_chk_PrePublish"]').click({force:true});
      //Display under Expired procurements-checkbox
    cy.get('@iframe').find('input[id="ctl00_Body_chk_PostPublish"]').click({force:true});
      //Digital signing tender
    cy.get('@iframe').find('select[id="ctl00_Body_ddl_AddoSigning"]').select(1).invoke('text').should('contains', 'Demand');
      //Plan NextStep
    cy.get('@iframe').find('input[value="Next step"]').click();
      //Prepare tab
      //Assert Create procurement groups
    cy.get('@iframe').find('span[class="label-pageheader"]').contains('Create procurement groups')
      .should('be.visible');
      //Create Procurement type Next Step
    cy.get('@iframe').find('input[value="Next step"]').click();
      //Assert Procurement type
    cy.get('@iframe').find('span[class="label-pageheader"]').contains('Procurement type').should('be.visible');
      //Procurement type Next Step
    cy.get('@iframe').find('input[value="Next step"]').click();
    cy.get('@iframe').find('input[id="ctl00_Body_txt_Days1"]').should('be.visible').clear().type(0);
      //Planning-enter number of days for contract notice
    cy.get('@iframe').find('input[id="ctl00_Body_txt_Days2"]').should('be.visible').clear().type(0);
      //click on Recalculate
    cy.wait(2000)
    cy.get('@iframe').find('input[value="Recalculate"]').should('be.visible').click({force:true});
    cy.wait(5000)
    cy.get('@iframe').find('input[value="Next step"]').should('be.visible').click({force:true})
    cy.wait(5000)
    cy.get('@iframe').find('input[value="Next step"]').should('be.visible').click({force:true})
  }

  verifyPublicContractNotice(){
    cy.get("[name='topmain']").its('0.contentDocument').its('body').find("[name='main']").its('0.contentDocument').its('body').as('iframe')
    cy.get('@iframe').find('span[id="ctl00_Body_PageHeader_lbl_Header"]').should('be.visible')
  }

  uploadDocument(){
    cy.get('@iframe').find('input[value="Add document"]').should('be.visible').click()
    const fileName = 'one.png';
    cy.get("[name='topmain']").its('0.contentDocument').its('body').find("[name='main']").its('0.contentDocument').its('body').as('iframe')
    // upload a document
    cy.get('@iframe').find('input[type="file"]').as('fileInput');
    
    cy.get('@fileInput').attachFile(fileName);
    
    cy.get('@iframe').find('input[value="Save and go back"]').click();
    //Public Contract Notice Next Step
    cy.get('@iframe').find('input[value="Next step"]').click()
  }

  verifyCreateadvertisement(){
    cy.get("[name='topmain']").its('0.contentDocument').its('body').find("[name='main']").its('0.contentDocument').its('body').as('iframe')
    cy.get('@iframe').find('span[id="ctl00_Body_PageHeader_lbl_Header"]').contains('Create advertisement').should('be.visible')
  }



 
  clickonPlan() {
    cy.get("[name='topmain']").its('0.contentDocument').its('body').find("[name='main']").its('0.contentDocument').its('body').as('iframe')
    cy.wait(1000)
    cy.get('@iframe').find('#ctl00_Body_dgrd_LastAccessedProjects_ctl02_lnk_Process').click({ force: true });
    //advertise

    cy.get('@iframe').find('td[class="menu-normal-top"]').eq(0).click();
    //plan
    cy.get('@iframe').find('span[class="label-pageheader"]').contains('Set up new procurement')
      .should('be.visible');
    //Procuring organisation:
    cy.get('@iframe').find('select[id="ctl00_Body_cbo_ProcuringOrganization"]').select(1)
      .invoke("text").should('contains', "Mercell Commerce AB");
    //Name of procurement: 
    cy.get('@iframe').find('input[id="ctl00_Body_txt_Name"]').clear().type("Tendsign Automation Test");
    //Reference number: 
    cy.get('@iframe').find('input[id="ctl00_Body_txt_ReferenceNumber"]').clear().type(423423)
    //Description: 
    cy.get('@iframe').find('textarea[id="ctl00_Body_txt_Description"]').clear()
      .type("Description for the Tendsign Automation in the plan tab");
    //Allowed tender languages:
    cy.get('@iframe').find('select[id="ctl00_Body_cbo_AllowedLanguages"]')
      .select('English').invoke("text").should('contains', "English");
    //Display under Planned procurements-checkbox
    cy.get('@iframe').find('input[id="ctl00_Body_chk_PrePublish"]').click({force:true});
    //Display under Expired procurements-checkbox
    cy.get('@iframe').find('input[id="ctl00_Body_chk_PostPublish"]').click({force:true});
    //Digital signing tender
    cy.get('@iframe').find('select[id="ctl00_Body_ddl_AddoSigning"]').select(1).invoke('text').should('contains', 'Demand');

    //Plan NextStep
    cy.get('@iframe').find('input[value="Next step"]').click();
    //Prepare tab
    //Assert Create procurement groups
    cy.get('@iframe').find('span[class="label-pageheader"]').contains('Create procurement groups')
      .should('be.visible');

    //Create Procurement type Next Step
    cy.get('@iframe').find('input[value="Next step"]').click();

    //Assert Procurement type
    cy.get('@iframe').find('span[class="label-pageheader"]').contains('Procurement type').should('be.visible');
    //Procurement type Next Step
    cy.get('@iframe').find('input[value="Next step"]').click();

    //assert Procurement Schedule
    // cy.get('@iframe').find('span[class="label-pageheader"]').contains('Procurement schedule').should('exist');
    //Planning-enter number of days for planning
    
    cy.get('@iframe').find('input[id="ctl00_Body_txt_Days1"]').should('be.visible').clear().type(0);
    //Planning-enter number of days for contract notice
    cy.get('@iframe').find('input[id="ctl00_Body_txt_Days2"]').should('be.visible').clear().type(0);
    //click on Recalculate
    cy.wait(2000)
    cy.get('@iframe').find('input[value="Recalculate"]').should('be.visible').click({force:true});
    cy.wait(5000)
    cy.get('@iframe').find('input[value="Next step"]').should('be.visible').click({force:true})
    cy.wait(5000)
    cy.get('@iframe').find('input[value="Next step"]').should('be.visible').click({force:true})
    // //Add Document in Prepare tab
    cy.get('@iframe').find('input[value="Add document"]').should('be.visible').click()
    const fileName = 'one.png';
    // cy.get('@iframe').find('input[value="Browse files..."]').click()
   
    // upload a document
    cy.get('@iframe').find('input[type="file"]').as('fileInput');
    
    cy.get('@fileInput').attachFile(fileName);
    
    cy.get('@iframe').find('input[value="Save and go back"]').click();
    //Public Contract Notice Next Step
    cy.get('@iframe').find('input[value="Next step"]').click()
    //Assert Advertisement
    // cy.get('@iframe').find('span[class="label-pageheader"]').contains('Create advertisement').should('be.visible');


  }
}
 
const smoke = new SmokeSuite();
export default smoke;