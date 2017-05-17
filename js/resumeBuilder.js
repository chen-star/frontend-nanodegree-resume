var bio = {
    "name" : "JIAXIN CHEN",
    "role" : "Software Developer Intern",
    "contacts" : {
        "mobile" : "+86 18210927187",
        "email" : "jxchen31@gmail.com",
        "github" : "https://github.com/chen-star",
        "location" : "Beijing, China"
    },
    "welcomeMessage" : "no pain no gain",
    "bioPic" : "/Users/chenjiaxin/frontend-nanodegree-resume/images/fry.jpg",
    "skills" : ["Java","JavaScript","HTML","CSS","Python"]
};

var work = {
    "jobs" : [
        {
            "title" : "title",
            "location" : "San Francisco",
            "employer" : "employer",
            "dates" : "dates",
            "description" : "description"
        }
    ]
};

var education = {

    "schools" : [
        {
            "name" : "Beijing University of Posts and Telecommunications (BUPT)",
            "location" : "Beijing, China",
            "degree" : "Bachelor of Engineering",
            "dates" : "2013-2017",
            "majors" : ["Telecommunications Engineering with Management"]
        },
        {
            "name" : "Carnegie Mellon University (CMU)",
            "location" : "Pittsburgh, U.S.",
            "degree" : "Master of Science",
            "dates" : "2017-2019",
            "url" : "?",
            "majors" : ["MISM"]
        }
    ],

    "onlineCourse" : [
        {
            "title" : "title",
            "school" : "school",
            "dates" : "dates",
            "url" : "url"
        }
    ]

};

var projects = {
    "projects" : [
        {
            "title" : "title",
            "dates" : "dates",
            "description" : "description",
            "images" : "/Users/chenjiaxin/frontend-nanodegree-resume/images/197x148.gif"
        }
    ]
};


// create bio part
// nationalize the name in bio
function inName(name){
    var names = name.trim().split(" ");
    var formattedGivenName = names[0][0].toUpperCase() + names[0].substring(1,names[0].length).toLowerCase();
    var formattedFamilyName = names[1].toUpperCase();
    return formattedGivenName +" "+ formattedFamilyName;
}
// encapsulate display function of bio into bio object
bio.display = function(){
    var temp = HTMLheaderName.replace("%data%", bio.name);
    $("#header").append(temp);
    temp = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").append(temp);
    temp = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#header").append(temp);
    temp = HTMLemail.replace("%data%", bio.contacts.email);
    $("#header").append(temp);
    temp = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#header").append(temp);
    temp = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#header").append(temp);
    temp = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(temp);
    temp = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(temp);

    if(bio.skills.length > 0) {

        $("#header").append(HTMLskillsStart);

        bio.skills.forEach(function(skill){
            var formattedSkill = HTMLskills.replace("%data%",skill);
            $("#skills").append(formattedSkill);
        });
}
};
bio.display();


// create education part
// encapsulate display function of education into education object
education.display = function(){
     education.schools.forEach(function(school){
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%",school.name);
        $(".education-entry:last").append(formattedName);
        var formattedDegree = HTMLschoolDegree.replace("%data%",school.degree);
        $(".education-entry:last").append(formattedDegree);
        var formattedDates = HTMLschoolDates.replace("%data%",school.dates);
        $(".education-entry:last").append(formattedDates);
        var formattedLocation = HTMLschoolLocation.replace("%data%",school.location);
        $(".education-entry:last").append(formattedLocation);
        var formattedMajor = HTMLschoolMajor.replace("%data%",school.majors);
        $(".education-entry:last").append(formattedMajor);
     });

     education.onlineCourse.forEach(function(course){
        $("#education").append(HTMLonlineClasses);
        var formattedTitle = HTMLonlineTitle.replace("%data%",course.title);
        $(".education-entry:last").append(formattedTitle);
        var formattedSchool = HTMLonlineSchool.replace("%data%",course.school);
        $(".education-entry:last").append(formattedSchool);
        var formattedDates = HTMLonlineDates.replace("%data%",course.dates);
        $(".education-entry:last").append(formattedDates);
        var formattedURL = HTMLonlineURL.replace("%data%",course.url);
        $(".education-entry:last").append(formattedURL);
     });
};
education.display();


// create work part
// encapsulate display function of work into work object
work.display = function(){
    for (var job in work.jobs) {
        // create new div for work experience
        $("#workExperience").append(HTMLworkStart);
        // concat employer and title
        var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};
work.display();


// create projects part
// encapsulate display function of projects into projects object
projects.display = function(){
    projects.projects.forEach(function(project){
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%",project.title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%",project.dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDes = HTMLprojectDescription.replace("%data%",project.description);
        $(".project-entry:last").append(formattedDes);
        var formattedImg = HTMLprojectImage.replace("%data%",project.images);
        $(".project-entry:last").append(formattedImg);
        $(".project-entry:last").append(formattedImg);
});
};
projects.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

