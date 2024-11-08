
let pic:any=document.getElementById("pic");
let myName:any=document.getElementById("myname");
let designation:any = document.getElementById("designation");
let phone:any = document.getElementById("phone");
let email:any = document.getElementById("email");
let address:any = document.getElementById("address");
let linkedin:any = document.getElementById("linkedin");
let univesrsity:any = document.getElementById("university");
let degree:any = document.getElementById("degree");
let startyear:any = document.getElementById("startyear");
// let endyear:any = document.getElementById("endyear");
let college:any = document.getElementById("college");
let degree1:any = document.getElementById("degree1");
let startyear1:any = document.getElementById("startyear1");
// let endyear1:any = document.getElementById("endyear1");
let company:any = document.getElementById("company");
let startyear2:any = document.getElementById("startyear2");
// let endyear2:any = document.getElementById("endyear2");
let description:any = document.getElementById("description");
let profile:any = document.getElementById("profile");
let skill1:any = document.getElementById("skill1");
let skill2:any = document.getElementById("skill2");
let skill3:any = document.getElementById("skill3");
let skill4:any = document.getElementById("skill4");
let institute:any = document.getElementById("institute");
let course:any = document.getElementById("course");
let institute2:any = document.getElementById("institute2");
let course2:any = document.getElementById("course2");
let language1:any = document.getElementById("language1");
let language2:any = document.getElementById("language2");

let submitbtn=document.getElementById("submitbtn");
let form=document.getElementById("resumeform")

form?.addEventListener('submit' , (e)=>{
    e.preventDefault();

    localStorage.setItem("myname", myName.value);
    localStorage.setItem("designation", designation.value);
    localStorage.setItem("phone", phone.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("address", address.value);
    localStorage.setItem("linkedin", linkedin.value);
    localStorage.setItem("university", univesrsity.value);
    localStorage.setItem("degree", degree.value);
    localStorage.setItem("startyear", startyear.value);
    // localStorage.setItem("endyear", endyear.value);
    localStorage.setItem("college", college.value);
    localStorage.setItem("degree1", degree1.value);
    localStorage.setItem("startyear1", startyear1.value);
    // localStorage.setItem("endyear1", endyear1.value);
    localStorage.setItem("company",company.value);
    localStorage.setItem("startyear2",startyear2.value);
    // localStorage.setItem("endyear2",endyear2.value);
    localStorage.setItem("description", description.value);
    localStorage.setItem("profile", profile.value);
    localStorage.setItem("skill1", skill1.value);
    localStorage.setItem("skill2", skill2.value);
    localStorage.setItem("skill3", skill3.value);
    localStorage.setItem("skill4", skill4.value);
    localStorage.setItem("institute", institute.value);
    localStorage.setItem("course", course.value);
    localStorage.setItem("institute2", institute2.value);
    localStorage.setItem("course2", course2.value);
    localStorage.setItem("lang1", language1.value);
    localStorage.setItem("lang2", language2.value);
    

    if (pic.files && pic.files[0]){
        let reader=new FileReader();
        reader.addEventListener("load" ,()=>{
            let textimg:any=reader.result;
            localStorage.setItem("profile-picture", textimg)
        })
        reader.readAsDataURL(pic.files[0])
    }

    window.location.href="./resume.html";

})
