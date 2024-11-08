let Name = localStorage.getItem("myname");
window.addEventListener('load', () => {

    let designation = localStorage.getItem("designation");
    let phone = localStorage.getItem("phone");
    let email = localStorage.getItem("email");
    let address = localStorage.getItem("address");
    let linkedin = localStorage.getItem("linkedin");
    let university = localStorage.getItem("university");
    let degree = localStorage.getItem("degree")
    let startyear = localStorage.getItem("startyear");
    // let endyear = localStorage.getItem("endyear");
    let college = localStorage.getItem("college");
    let degree1 = localStorage.getItem("degree1");
    let startyear1 = localStorage.getItem("startyear1");
    // let endyear1 = localStorage.getItem("endyear1");
    let company = localStorage.getItem("company");
    let startyear2 = localStorage.getItem("startyear2");
    // let endyear2 = localStorage.getItem("endyear2");
    let description = localStorage.getItem("description");
    let profile = localStorage.getItem("profile");
    let skill1 = localStorage.getItem("skill1");
    let skill2 = localStorage.getItem("skill2");
    let skill3 = localStorage.getItem("skill3");
    let skill4 = localStorage.getItem("skill4");
    let institute = localStorage.getItem("institute");
    let course = localStorage.getItem("course");
    let institute2 = localStorage.getItem("institute2");
    let course2 = localStorage.getItem("course2");
    let language1=localStorage.getItem("lang1");
   let language2= localStorage.getItem("lang2");
let picture=localStorage.getItem("profile-picture");
  
    let resName: any = document.getElementById("res-name");
    resName.textContent = Name;
    resName.style.textTransform = "uppercase";
  
    let resDesignation: any = document.getElementById("res-designation");
    resDesignation.textContent = designation;
    resDesignation.style.textTransform = "uppercase";
  
    let resphone: any = document.getElementById("res-phone");
    resphone.textContent = phone;
  
    let resemail: any = document.getElementById("res-email");
    resemail.textContent = email;
    
    let resAddress:any=document.getElementById("res-address");
    resAddress.textContent=address;
  
    let reslinkedin:any= document.getElementById("res-linkedin");
    reslinkedin.textContent=linkedin;
  
    let resprofile:any=document.getElementById("res-profile");
    resprofile.textContent=profile;
  
    let resCollege:any=document.getElementById("res-college");
    resCollege.textContent = university;
    resCollege.style.textTransform = "uppercase";
  
    let resdegree:any=document.getElementById("res-degree");
    resdegree.textContent=degree;
    resdegree.style.textTransform = "uppercase";
  
    let resstart:any=document.getElementById("res-start");
    resstart.textContent=startyear;
  
    let resCollege2:any=document.getElementById("res-college2");
    resCollege2.textContent = college;
    resCollege2.style.textTransform = "uppercase";
  
    let resdegree2:any=document.getElementById("res-degree2");
    resdegree2.textContent=degree1;
    resdegree2.style.textTransform = "uppercase";
  
    let resstart2:any=document.getElementById("res-start2");
    resstart2.textContent=startyear1;
    
    let rescompany:any=document.getElementById("res-experience");
    rescompany.textContent=company
    rescompany.style.textTransform = "uppercase";

    let resExpTime:any=document.getElementById("res-exp-time");
    resExpTime.textContent=startyear2;

    let jobDetail:any=document.getElementById("job-detail");
    jobDetail.textContent=description;

    let resSkill1:any=document.getElementById("res-skill1");
    resSkill1.textContent=skill1;
    resSkill1.style.textTransform="uppercase";

    let resSkill2:any=document.getElementById("res-skill2");
    resSkill2.textContent=skill2;
    resSkill2.style.textTransform="uppercase";

    let resSkill3:any=document.getElementById("res-skill3");
    resSkill3.textContent=skill3;
    resSkill3.style.textTransform="uppercase";

    let resSkill4:any=document.getElementById("res-skill4");
    resSkill4.textContent=skill4;
    resSkill4.style.textTransform="uppercase";

    let resInstitute1:any=document.getElementById("res-institute1");
    resInstitute1.textContent=institute;
    resInstitute1.style.textTransform="uppercase";

    let rescourse1:any=document.getElementById("res-course1");
    rescourse1.textContent=course;

    let resInstitute2:any=document.getElementById("res-institute2");
    resInstitute2.textContent=institute2;
    resInstitute2.style.textTransform="uppercase";

    let rescourse2:any=document.getElementById("res-course2");
    rescourse2.textContent=course2;
    
    let langu1:any=document.getElementById("language1");
    langu1.textContent=language1;

    let langu2:any=document.getElementById("language2");
    langu2.textContent=language2;

 let resImage:any=document.getElementById("res-img");
 resImage.src=picture;

  })
  
  
  
  let printButton:any=document.getElementById("print-btn");
  printButton.addEventListener('click' , ()=>{
    window.print();
  })
  
  
  let editButton=document.getElementById("edit-btn");
  editButton?.addEventListener('click', ()=>{
    window.history.back()
  })
  
  let anchorTag:any=document.getElementById("anchor-tag");
  let shareButton:any=document.getElementById("share-btn");
  let userName;
  if(Name){
    userName=Name.toLowerCase().replace(/\s + /g ,"-")
  }else{
    userName="user"
  }
  let baseurl="http://127.0.0.1:5502/resume.html";
  let uniqueurl=`${baseurl}?/${Name}`

  shareButton.addEventListener('click' ,()=>{
    anchorTag.setAttribute("href",uniqueurl);
  })


  let copyButton:any=document.getElementById("copy-btn");
  copyButton?.addEventListener('click', ()=>{
    navigator.clipboard.writeText(uniqueurl).then(()=>{
      alert("Copy Successfully");
    })
  })
  
  

