const typesHtml = `
     <div class="data">
            <label for="da">Type Of Material</label>
            <input class="details" id ="da"list="mat"name="prog" required  >

            <datalist  class="mater"   id="mat">
                <option value="حديد سداسي ">
                <option value="حديد مربع ">
                <option value=" حديد ملفوف ">
                <option value="أصفر سداسي">
                <option value="أصفر مربع ">
                <option value="أصفر ملفوف">
                <option value="أحمر سداسي">
                <option value="أحمد مربع">
                <option value="أحمر ملفوف">
                </datalist>
        </div> 
`;
const thicknessHtml = ` <div class="thickness"> 
<label for="id6"> Thickness Of Material </label>
    <input class="thick"  id ="id6" type="text" required>
</div> `;
document.querySelector(".number").insertAdjacentHTML("afterend", typesHtml);
document.querySelector(".dia").insertAdjacentHTML("afterend", thicknessHtml);
document.querySelector(".type").textContent = "Pipe";
document.querySelector(".out1").textContent = "عدد الوحدات في المتر =10 ";
