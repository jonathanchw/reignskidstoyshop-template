const WEBSITE_NAME = 'Reigns Kids Toy Shop';
const WEBSITE_URL = 'reignskidstoyshop.com';
const WEBSITE_CORP = 'Fitness Reign Inc.';
const WEBSITE_PHONE = '(844) 791-3066';
const WEBSITE_EMAIL = 'support@toys.com';
const WEBSITE_ADDRESS = '1205 E Waterside Cove Apt 32 Midvale, UT 84047, USA';
const WEBSITE_RETURN_ADDRESS = '12913 Harbor Blvd Ste Q3 #433, Garden Grove, CA 92840,USA';
const WEBSITE_DESCRIPTOR = 'reignskidstoyshop';
const WEBSITE_TAGLINE = 'Online Shopping Simplified';
const WEBSITE_ABOUT_US='Great Deals At Great Prices'
let websiteName = document.querySelectorAll('.js_website-name');
let websiteUrl = document.querySelectorAll('.js_website-url');
let websiteCorp = document.querySelectorAll('.js_website-corp');
let websitePhone = document.querySelectorAll('.js_website-phone');
let websiteEmail = document.querySelectorAll('.js_website-email');
let websiteAddress = document.querySelectorAll('.js_website-address');
let websiteReturnAddress = document.querySelectorAll('.js_website-return-address');
let websiteDescriptor = document.querySelectorAll('.js_website-desc');
let allLogoDataText = document.querySelectorAll('.js_logo-data');
let heroTagLine = document.querySelectorAll('.js_tag_line_main');
let aboutUsText = document.querySelectorAll('.js_about-text');
let rpContainer = document.querySelectorAll('.js_website-return-partner');
allLogoDataText = [...allLogoDataText];
allLogoDataText.forEach(item => {
    item.setAttribute('data-text', WEBSITE_NAME);
})
websiteName = [...websiteName];
websiteUrl = [...websiteUrl];
websiteCorp = [...websiteCorp];
websitePhone = [...websitePhone];
websiteAddress = [...websiteAddress];
websiteDescriptor = [...websiteDescriptor];
// SET WEBSITE TITLE
document.title = WEBSITE_NAME;
if (!(websiteName.length === 0)) {
    setInformation(websiteName, WEBSITE_NAME);
}
if (!(websiteUrl.length === 0)) {
    setInformation(websiteUrl, WEBSITE_URL);
    setWebsiteHref(websiteUrl, WEBSITE_URL);
}
if (!(websiteCorp.length === 0)) {
    setInformation(websiteCorp, WEBSITE_CORP);
}
if (!(websitePhone.length === 0)) {
    setInformation(websitePhone, WEBSITE_PHONE);
    setPhoneHref(websitePhone, WEBSITE_PHONE);
}
if (!(websiteEmail.length === 0)) {
    setInformation(websiteEmail, WEBSITE_EMAIL);
    setEmailHref(websiteEmail, WEBSITE_EMAIL);
}
if (!(websiteAddress.length === 0)) {
    setInformation(websiteAddress, WEBSITE_ADDRESS);
}
if (!(websiteReturnAddress.length === 0)) {
    setInformation(websiteReturnAddress, WEBSITE_RETURN_ADDRESS);
}
if (!(websiteDescriptor.length === 0)) {
    setInformation(websiteDescriptor, WEBSITE_DESCRIPTOR);
}
if (!(heroTagLine.length === 0)) {
    setInformation(heroTagLine, WEBSITE_TAGLINE);
}
if (!(aboutUsText === null)) {
    setInformation(aboutUsText, WEBSITE_ABOUT_US);
}
if ((WEBSITE_RETURN_ADDRESS != '12913')) {
    setInformation(rpContainer, "Save Rack");
}
function setInformation(array, info) {
    array.forEach(item => {
        item.textContent = info;
    });
}
function setWebsiteHref(array, info) {
    array.forEach(item => {
        item.hasAttribute('href') && item.setAttribute('href', '//' + info);
    });
}
function setPhoneHref(array, info) {
    array.forEach(item => {
        const href = `tel:${info}`;
        item.hasAttribute('href') && item.setAttribute('href', href);
    });
}
function setEmailHref(array, info) {
    array.forEach(item => {
        const href = `mailto:${info}`
        item.setAttribute('href', href);
    });
}
