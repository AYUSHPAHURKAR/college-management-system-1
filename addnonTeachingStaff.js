document.getElementById("nonteachingstaffForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    var name = document.getElementById("name").value;
    
    var dob = document.getElementById("dob").value;
    var dateOfJoining = document.getElementById("dateOfJoining").value;
    var city = document.getElementById("city").value;
    var email = document.getElementById("email").value;
  
    var nonteachingstaffData = {
      name: name,
     
      dob: dob,
      dateOfJoining: dateOfJoining,
      city: city,
      email: email
    };
  
    var listItem = document.createElement("li");
    listItem.innerHTML = "<strong>Name:</strong> " + nonteachingstaffData.name + "<br>" +
                         
                         "<strong>Date of Birth:</strong> " + nonteachingstaffData.dob + "<br>" +
                         "<strong>Date of Joining:</strong> " + nonteachingstaffData.dateOfJoining + "<br>" +
                         "<strong>City:</strong> " + nonteachingstaffData.city + "<br>" +
                         "<strong>Email:</strong> " + nonteachingstaffData.email + "<br>";
  
    document.getElementById("list").appendChild(listItem);
  
    document.getElementById("nonteachingstaffList").style.display = "block";
  });
  