document.getElementById("studentForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    var name = document.getElementById("name").value;
    var course = document.getElementById("course").value;
    var dob = document.getElementById("dob").value;
    var dateOfJoining = document.getElementById("dateOfJoining").value;
    var city = document.getElementById("city").value;
    var email = document.getElementById("email").value;
  
    var studentData = {
      name: name,
      course: course,
      dob: dob,
      dateOfJoining: dateOfJoining,
      city: city,
      email: email
    };
  
    var listItem = document.createElement("li");
    listItem.innerHTML = "<strong>Name:</strong> " + studentData.name + "<br>" +
                         "<strong>Course:</strong> " + studentData.course + "<br>" +
                         "<strong>Date of Birth:</strong> " + studentData.dob + "<br>" +
                         "<strong>Date of Joining:</strong> " + studentData.dateOfJoining + "<br>" +
                         "<strong>City:</strong> " + studentData.city + "<br>" +
                         "<strong>Email:</strong> " + studentData.email + "<br>";
  
    document.getElementById("list").appendChild(listItem);
  
    document.getElementById("studentList").style.display = "block";
  });
  