let selectedUnit = "feet";

const btn_ft = document.getElementById("btn-feet");
const btn_cms = document.getElementById("btn-m");
const height_unit = document.getElementById("height");

//Event  Listener's
btn_ft.addEventListener("click", event => {
    selectedUnit = "feet";
    height_unit.setAttribute("step", "0.1");
});

btn_cms.addEventListener("click", event => {
    selectedUnit = "m";
    height_unit.setAttribute("step", "0.01");
});

//function to calculate BMI
function calculate()
{
    //input Id's
    const name = document.getElementById("name").value;
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const progressBar = document.getElementById("progress-bar");

    //Display Id's
    const health_category = document.getElementById("health_category");
    let result = document.getElementById("bmi_result");
    let title = document.getElementById("title");
    const dt = document.getElementsByTagName("dt")[0];
    const dd = document.getElementsByTagName("dd")[0];
    const dt1 = document.getElementsByTagName("dt")[1];
    const dd1 = document.getElementsByTagName("dd")[1];
    const error = document.getElementById("error");
    let bmi;
    let height_in_m;

    if(name == "" || isNaN(height) || isNaN(weight))
    {
        error.innerHTML = "Please enter your name, height and weight to calculate your BMI.";
        document.getElementById("result").style.display = "none";

    }

    if(selectedUnit === "feet")
    {
        let h = height.toString();
        let feet = h.slice(0, 2);
        let inch = h.slice(2);
        feet = Number(feet);
        inch = Number(inch);

        let total_height = (feet * 12) + inch;
        height_in_m = total_height * 0.0254;
        bmi = weight / (height_in_m * height_in_m);
    }
    else
    {
        bmi = weight / (height * height);
        height_in_inches = height * 39.3701;
    }

    const percentage = Math.min(Math.max((bmi - 10) * 100/30, 0), 100);
    progressBar.style.width = `${percentage}%`;
   
    if(bmi < 16)
    {
        error.innerHTML = "";
        document.getElementById("result").style.display = "block";
        title.innerHTML = `Hello, ${name}`;
        result.innerHTML = `BMI: ${bmi.toFixed(2)}`;
        health_category.textContent = `Serverely Underweight!`;
        health_category.style.color = "#820505";
        progressBar.style.background = "#820505";
        dt.innerHTML = "Health Recommendations:";
        dd.innerHTML = `📌Consult a healthcare provider immediately to address potential nutritional deficiencies or underlying medical conditions.
                       <br>📌Avoid strenuous physical activity; prioritize strength-building exercises like yoga or light resistance training.<br>
                       📌Gradually increase caloric intake to avoid overburdening the digestive system.`;

        dt1.innerHTML = "Diet Plan:";
        dd1.innerHTML = `<b>Calories:</b>Increase by 500–1000/day.<br>
                         <b>Carbohydrates:</b> Whole grains (oats, brown rice, whole wheat bread).<br>
                         <b>Proteins:</b> Lean meat, eggs, dairy, tofu, legumes, and protein shakes.<br>
                         <b>Healthy Fats:</b> Nuts, seeds, avocado, and olive oil.<br>
                         <b>Snacks:</b> Peanut butter on toast, yogurt with honey, or smoothies with fruits and nuts.`;
    }
    else if(bmi >= 16 && bmi <= 17)
    {
        error.innerHTML = "";
        document.getElementById("result").style.display = "block";
        title.textContent = `Hello, ${name}`;
        result.textContent = `BMI: ${bmi.toFixed(2)}`;
        health_category.textContent = ` Moderately Underweight`;
        health_category.style.color = "red";
        progressBar.style.background = "red";
        dt.innerHTML = "Health Recommendations:";
        dd.innerHTML = `📌Incorporate a balanced diet with an emphasis on nutrient-dense foods.<br>
                        📌Monitor progress with regular weight check-ups and consult a dietitian if needed.<br>
                        📌Engage in light physical activity to stimulate appetite and muscle growth.<br>`;

        dt1.innerHTML = "Diet Plan:";
        dd1.innerHTML = `<b>Carbohydrates:</b> Sweet potatoes, quinoa, whole wheat pasta.<br>
                         <b>Proteins:</b>Chicken, fish, eggs, lentils, cottage cheese.<br>
                         <b>Fruits & Vegetables:</b> Bananas, mangoes, and starchy vegetables like potatoes and carrots.<br>
                         <b>Healthy Fats:</b> Coconut milk, ghee, or butter in moderation.<br>
                         <b>Meal Ideas:</b> Grilled chicken with sweet potato, lentil soup, or whole-grain sandwiches.<br>`;

    }
    else if(bmi >= 17 && bmi <= 18.5)
    {
        error.innerHTML = "";
        document.getElementById("result").style.display = "block";
        title.textContent = `Hello, ${name}`;
        result.textContent = `BMI: ${bmi.toFixed(2)}`;
        health_category.textContent = `Mildly Underweight!`;
        health_category.style.color = "orange";
        progressBar.style.background = "orange";
        dt.innerHTML = "Health Recommendations:";
        dd.innerHTML = `📌Focus on slow and steady weight gain with regular meals and snacks.<br>
                        📌Include muscle-strengthening exercises to build lean mass.<br>
                        📌Address any deficiencies in vitamins or minerals through supplementation if needed.<br>`;

        dt1.innerHTML = "Diet Plan:";
        dd1.innerHTML = `<b>Breakfast:</b> Eggs, whole-grain toast, and a glass of milk.<br>
                         <b>Lunch:</b> Brown rice with dal, chicken curry, and sautéed vegetables.<br>
                         <b>Dinner:</b> Grilled fish, quinoa, and steamed broccoli.<br>
                         <b>Snacks:</b> Trail mix, cheese sticks, and fruit juices.<br>
                         <b>Hydration:</b> Drink water throughout the day to stay hydrated.<br>`;

    }
    else if(bmi >= 18.5 && bmi <= 25)
    {
        error.innerHTML = "";
        document.getElementById("result").style.display = "block";
        title.textContent = `Hello, ${name}`;
        result.textContent = `BMI: ${bmi.toFixed(2)}`;
        health_category.textContent = `Normal Weight`;
        health_category.style.color = "#0a9fc4";
        progressBar.style.background = "#0a9fc4";
        dt.innerHTML = "Health Recommendations:";
        dd.innerHTML = `📌Maintain a balanced diet and regular physical activity.<br>
                        📌Focus on overall well-being through stress management and adequate sleep.<br>
                        📌Aim for at least 30 minutes of moderate exercise most days of the week.<br>`;

        dt1.innerHTML = "Diet Plan:";
        dd1.innerHTML = `<b>Breakfast:</b> Oatmeal with fruits and nuts.<br>
                         <b>Lunch:</b> Whole-grain bread sandwich with lean protein and fresh vegetables.<br>
                         <b>Dinner:</b> Grilled chicken or tofu with roasted vegetables.<br>
                         <b>Snacks:</b> Fresh fruit, yogurt, or nuts.<br>
                         <b>Hydration:</b> At least 8 glasses of water daily.<br>`;

    }
    else if(bmi >= 25 && bmi <= 30)
    {
        error.innerHTML = "";
        document.getElementById("result").style.display = "block";
        title.textContent = `Hello, ${name}`;
        result.textContent = `BMI: ${bmi.toFixed(2)}`;
        health_category.textContent = `Overweight`;
        health_category.style.color = "#36755d";
        progressBar.style.background = "#36755d";
        dt.innerHTML = "Health Recommendations:";
        dd.innerHTML = `📌Aim to lose 0.5–1 kg (1–2 lbs) per week through a calorie deficit.<br>
                        📌Incorporate 150 minutes of moderate-intensity cardio and strength training weekly.<br>
                        📌Avoid processed foods, sugary drinks, and excessive fats.<br>`;

        dt1.innerHTML = "Diet Plan:";
        dd1.innerHTML = `<b>Carbohydrates:</b> Reduce refined carbs; prioritize whole grains and legumes.<br>
                         <b>Proteins:</b> Grilled chicken, fish, lentils, and low-fat dairy.<br>
                         <b>Fruits & Vegetables:</b> High-fiber options like apples, spinach, and broccoli.<br>
                         <b>Snacks:</b> Unsalted nuts, roasted chickpeas, or vegetable sticks with hummus.<br>
                         <b>Hydration:</b> Drink water or herbal teas, avoid sugary beverages.<br>`;

    }
    else if(bmi >= 30 && bmi <= 35)
    {
        error.innerHTML = "";
        document.getElementById("result").style.display = "block";
        title.textContent = `Hello, ${name}`;
        result.textContent = `BMI: ${bmi.toFixed(2)}`;
        health_category.textContent = `Obese Class I`;
        health_category.style.color = "#de5804";
        progressBar.style.background = "#de5804";
        dt.innerHTML = "Health Recommendations:";
        dd.innerHTML = `📌Work with a healthcare provider to set realistic weight-loss goals.<br>
                        📌Follow a structured exercise program with a mix of cardio, strength training, and flexibility exercises.<br>
                        📌Monitor portion sizes and avoid high-calorie snacks.<br>`;

        dt1.innerHTML = "Diet Plan:";
        dd1.innerHTML = `<b>Breakfast:</b> Scrambled eggs with spinach and whole-grain toast.<br>
                         <b>Lunch:</b> Grilled salmon, quinoa, and a mixed green salad with olive oil.<br>
                         <b>Dinner:</b> Turkey stir-fry with vegetables and a small portion of brown rice.<br>
                         <b>Snacks:</b> Celery sticks with peanut butter or a small handful of almonds.<br>
                         <b>Hydration:</b> Drink water before meals to reduce hunger.<br>`;

    }
    else if(bmi >= 35 && bmi <= 40)
    {
        error.innerHTML = "";
        document.getElementById("result").style.display = "block";
        title.textContent = `Hello, ${name}`;
        result.textContent = `BMI: ${bmi.toFixed(2)}`;
        health_category.textContent = `Obese Class II`;
        health_category.style.color = "#de2904";
        progressBar.style.background = "#de2904";
        dt.innerHTML = "Health Recommendations:";
        dd.innerHTML = `📌Consider medical supervision for a weight-loss plan, including therapy or medications if necessary.<br>
                        📌Gradually increase physical activity, focusing on low-impact exercises to reduce strain on joints.<br>
                        📌Reduce stress and ensure adequate sleep for better weight management.<br>`;

        dt1.innerHTML = "Diet Plan:";
        dd1.innerHTML = `<b>Breakfast:</b> Greek yogurt with chia seeds and berries.<br>
                         <b>Lunch:</b> Lentil soup, grilled chicken, and steamed vegetables.<br>
                         <b>Dinner:</b> Baked fish, roasted asparagus, and a small baked potato.<br>
                         <b>Snacks:</b> Hard-boiled eggs, raw veggies with tzatziki.<br>
                         <b>Hydration:</b> Avoid high-calorie beverages and drink water consistently.<br>`;

    }
    else if(bmi >= 40)
    {
        error.innerHTML = "";
        document.getElementById("result").style.display = "block";
        title.textContent = `Hello, ${name}`;
        result.textContent = `BMI: ${bmi.toFixed(2)}`;
        health_category.textContent = `Obese Class III`;
        health_category.style.color = "red";
        progressBar.style.background = "red";
        dt.innerHTML = "Health Recommendations:";
        dd.innerHTML = `📌Seek professional help for personalized diet and exercise plans, potentially including bariatric surgery.<br>
                        📌Engage in low-intensity, joint-friendly exercises like swimming or walking.<br>
                        📌Manage emotional eating by seeking support from a counselor or dietitian.<br>`;

        dt1.innerHTML = "Diet Plan:";
        dd1.innerHTML = `<b>Breakfast:</b> Smoothie with spinach, banana, almond milk, and protein powder.<br>
                         <b>Lunch:</b> Grilled chicken salad with balsamic dressing.<br>
                         <b>Dinner:</b> Grilled vegetables with lean protein like turkey or tofu.<br>
                         <b>Snacks:</b> Low-fat cheese or a handful of mixed nuts.<br>
                         <b>Hydration:</b> Avoid all sugary drinks; focus on plain water or herbal teas.<br>`;
    }
}

//function to reset
function reset()
{
    error.innerHTML = "";
    document.getElementById("result").style.display = "none";
    document.getElementById("name").value = "";
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("progress-bar").style.width = "0%";
    document.getElementById("bmi_result").textContent = "";
    document.getElementById("title").textContent = "";
    document.getElementsByTagName("dt")[0].textContent = "";
    document.getElementsByTagName("dd")[0].textContent = "";
    document.getElementsByTagName("dt")[1].textContent = "";
    document.getElementsByTagName("dd")[1].textContent = "";
    document.getElementById("health_category").textContent = "";

}