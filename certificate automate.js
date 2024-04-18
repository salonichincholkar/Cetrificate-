const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

(async function example() {
let driver = await new Builder().forBrowser(Browser.CHROME).build();
try {
await driver.get('file:///H:/Assignments/Selenium/Certificate%20Selenium/sample-code/preview.html');
	
let certificatewrapper = await driver.findElement(By.className('certificate-wrapper'));
console.log("wrapper : ",await  certificatewrapper);
	
	
async	function certificateNo(string){
let str=string.match(/Certificate Number: (\d{4})/);
return (str);
}   
await driver.manage().setTimeouts({ implicit: 5000 });
let srNo = await driver.findElement(By.className('sr-no'));
console.log(await srNo.getText())
console.log("Expected Result:",await certificateNo(await srNo.getText()));	
	
    
async function isValidDateFormat(dateString) {
let str=dateString.match(/^Date: \d{2}-\d{2}-\d{4}$/);
return(str); 
}
await driver.manage().setTimeouts({implicit: 5000 });
let date = await driver.findElement(By.className('date'));
console.log(await date.getText())
console.log("Expected Result:",await isValidDateFormat(await date.getText()));



async function isNamePresent(candidateName) {
try {
// Find elements by class name
let elements = await driver.findElements(By.className('candidate-name'));

// Loop through the found elements
for (let element of elements) {
// Get the text of the element
let text = await element.getText();
            
// Check if the candidate's name is present in the text
if (text.includes(candidateName)) {
return true; // Candidate's name is present, return true
}
}
        
// If candidate's name is not found in any of the elements, return false
return false;
} 
catch (error) {
console.error("Error occurred:", error);
return false; // Return false in case of any error
}
}

await driver.manage().setTimeouts({implicit: 5000 });
let elements = await driver.findElement(By.className('candidate-name'));
console.log(await elements.getText())
console.log("Name of Candiate:", await isNamePresent(await elements.getText()));

let certMaster=
{
certificatetitle:'Certificate',
subtitle:'of Appreciation',
initialContent:'This Certificate is proudly presented to',
maincontent:'for successfully completing the training course as\nprescribed by the organisation',
signpresident:'Signature of President',
signdirector:'Signature of Director',
logo:'',
orgname:'Maha Mission Education and Career Council',
add:'Office No. 404, Vastu Viva, Besids Sanket Inn, Bhumkar Chowk\n\nWakad, Pune, Maharashtra - 411057'

}
	 
await driver.findElement(By.className('title'));
console.log("Certificate Title:", certMaster.certificatetitle);

await driver.findElement(By.className('subtitle'));
console.log("Subtitle:", certMaster.subtitle);

await driver.findElement(By.className('initial-content'));
console.log("Initial Content:", certMaster.initialContent);

await driver.findElement(By.className('sign-president'));
console.log("Sign President:", certMaster.signpresident);

await driver.findElement(By.className('sign-director'));
console.log("sign Diector:", certMaster.signdirector);


await driver.findElement(By.className('main-content'));
console.log("Main Content:", certMaster.maincontent);

await driver.findElement(By.className('org-logo'));
console.log("Organization Logo:", certMaster.logo);

await driver.findElement(By.className('org-name'));
console.log("Organization Name:", certMaster.orgname);

await driver.findElement(By.className('org-address'));
console.log("Organization Address:", certMaster.add);
	

} finally {
await driver.quit();
}
})();