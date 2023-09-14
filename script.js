
    const tooltips = document.querySelectorAll('.tt')
    tooltips.forEach(t => {
      new bootstrap.Tooltip(t)
    })
 

function confirm_alert(node) {
    return confirm("Sorry the site is under updation. Please click on OK to continue.");
}


$("#submit-form").submit((e)=>{
  e.preventDefault()
  $.ajax({
      url:"https://script.google.com/macros/s/AKfycbyl9K1DrVubRzscZunYZT_SfrsJTjRnTnh69ui28fAs_EKqs10HuhAhPFeeC7tDdb0/exec",
      data:$("#submit-form").serialize(),
      method:"post",
      success:function (response){
          alert("Form submitted successfully")
          window.location.reload()
          //window.location.href="https://google.com"
      },
      error:function (err){
          alert("Something Error")

      }
  })
})