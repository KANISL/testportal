function login() {
    document.getElementById('initialView').style.display = 'none';
    document.getElementById('sidebar').style.display = 'block';
    document.getElementById('info').style.display = 'block';
    document.getElementById('coursesView').style.display = 'block';
}

function showCourses() {
    document.getElementById('testButtons').style.display = 'block';
}

function logout() {
    document.getElementById('initialView').style.display = 'block';
    document.getElementById('sidebar').style.display = 'none';
    document.getElementById('info').style.display = 'none';
    document.getElementById('coursesView').style.display = 'none';
    document.getElementById('testButtons').style.display = 'none';
}

function showMCQ() {
    document.getElementById('testArea').innerHTML = `
        <h2>MCQ Test</h2>
        <form onsubmit="askFeedback(event)">
            <label>Question 1</label><br>
            <input type="radio" name="q1" value="1"> Answer 1<br>
            <input type="radio" name="q1" value="2"> Answer 2<br>
            <input type="radio" name="q1" value="3"> Answer 3<br>
            <input type="radio" name="q1" value="4"> Answer 4<br>
            <br>
            <label>Question 2</label><br>
            <input type="radio" name="q2" value="1"> Answer 1<br>
            <input type="radio" name="q2" value="2"> Answer 2<br>
            <input type="radio" name="q2" value="3"> Answer 3<br>
            <input type="radio" name="q2" value="4"> Answer 4<br>
            <br>
            <button type="submit">Submit</button>
        </form>
    `;
}

function showOneMark() {
    document.getElementById('testArea').innerHTML = `
        <h2>One Mark Questions</h2>
        <form onsubmit="askFeedback(event)">
            <label>Question 1</label><br>
            <input type="text" name="q1"><br>
            <br>
            <label>Question 2</label><br>
            <input type="text" name="q2"><br>
            <br>
            <button type="submit">Submit</button>
        </form>
    `;
}

function showCoding() {
    document.getElementById('testArea').innerHTML = `
        <h2>Coding Assessment</h2>
        <form onsubmit="askFeedback(event)">
            <label>Question 1</label><br>
            <textarea name="q1" rows="4" cols="50"></textarea><br>
            <br>
            <label>Question 2</label><br>
            <textarea name="q2" rows="4" cols="50"></textarea><br>
            <br>
            <button type="submit">Submit</button>
        </form>
    `;
}

function askFeedback(event) {
    event.preventDefault();
    document.getElementById('testArea').innerHTML = `
        <h3>Please provide your feedback</h3>
        <textarea id="feedbackText" rows="4" cols="50"></textarea><br><br>
        <button onclick="showFeedback()">Submit Feedback</button>
    `;
}

function showFeedback() {
    var feedback = document.getElementById('feedbackText').value;
    document.getElementById('testArea').innerHTML = `
        <div class="feedback-box">
            <h3>Thank you for your feedback!</h3>
            <p>${feedback}</p>
            <div class="success-message">Successfully Completed</div>
            <div class="pie-chart-container">
                <canvas id="pieChart"></canvas>
            </div>
        </div>
    `;
    renderChart();
}

function renderChart() {
    var ctx = document.getElementById('pieChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['MCQ', 'One Mark', 'Coding'],
            datasets: [{
                data: [30, 30, 40],
                backgroundColor: ['green', 'violet', 'brown']
            }]
        },
        options: {
            responsive: true
        }
    });
}
