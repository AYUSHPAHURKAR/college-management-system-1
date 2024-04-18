document.getElementById("teacherForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    var name = document.getElementById("name").value;
    var course = document.getElementById("course").value;
    var dob = document.getElementById("dob").value;
    var dateOfJoining = document.getElementById("dateOfJoining").value;
    var city = document.getElementById("city").value;
    var email = document.getElementById("email").value;
  
    var teacherData = {
      name: name,
      course: course,
      dob: dob,
      dateOfJoining: dateOfJoining,
      city: city,
      email: email
    };
  
    var listItem = document.createElement("li");
    listItem.innerHTML = "<strong>Name:</strong> " + teacherData.name + "<br>" +
                         "<strong>Course:</strong> " + teacherData.course + "<br>" +
                         "<strong>Date of Birth:</strong> " + teacherData.dob + "<br>" +
                         "<strong>Date of Joining:</strong> " + teacherData.dateOfJoining + "<br>" +
                         "<strong>City:</strong> " + teacherData.city + "<br>" +
                         "<strong>Email:</strong> " + teacherData.email + "<br>";
  
    document.getElementById("list").appendChild(listItem);
  
    document.getElementById("teacherList").style.display = "block";
  });
  