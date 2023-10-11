const workflowContent = document.getElementById('workflow');
const memberContent = document.getElementById('member-list');
const PMDRContent = document.getElementById('PMDRcountdown');

function showWorkflowContent() {
    workflowContent.style.display = 'block';
    memberContent.style.display = 'none';
    PMDRContent.style.display = 'none';
}

function showMemberContent() {
    workflowContent.style.display = 'none';
    memberContent.style.display = 'block';
    PMDRContent.style.display = 'none';
}

function showPMDRContent() {
    workflowContent.style.display = 'none';
    memberContent.style.display = 'none';
    PMDRContent.style.display = 'block';
}

const workflowMenuItem = document.getElementById('home');
const memberMenuItem = document.getElementById('about-us');
const PMDRMenuItem = document.getElementById('pmdr');

workflowMenuItem.addEventListener('click', function () {
    console.log('Workflow menu clicked');
    showWorkflowContent();
});
memberMenuItem.addEventListener('click', function () {
    console.log('About Us menu clicked');
    showMemberContent();
});
PMDRMenuItem.addEventListener('click', function () {
    console.log('PMDR menu clicked');
    showPMDRContent();
});