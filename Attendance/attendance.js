const attendanceLogs = [];

const attendanceForm = document.getElementById('attendanceForm');
const logsDisplay = document.getElementById('logsDisplay');

attendanceForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const group = document.getElementById('groupSelect').value;
    const lesson = document.getElementById('lessonSelect').value;
    const topic = document.getElementById('topicInput').value;
    
    const checkboxes = document.querySelectorAll('.student-check');
    const presentStudents = [];
    
    checkboxes.forEach(cb => {
        if (cb.checked) {
            presentStudents.push(cb.value);
        }
    });

    const newLog = {
        group: group,
        lesson: lesson,
        topic: topic,
        students: presentStudents,
        date: new Date().toLocaleDateString()
    };

    attendanceLogs.push(newLog);

    renderLogs();

    attendanceForm.reset();
});

function renderLogs() {
    if (attendanceLogs.length === 0) return;

    logsDisplay.innerHTML = '';

    attendanceLogs.forEach((log) => {
        const logItem = document.createElement('div');
        logItem.className = 'log-card';
        
        logItem.innerHTML = `
            <div class="log-header">
                <strong>Group: ${log.group} | Lesson: ${log.lesson}</strong>
                <span>${log.date}</span>
            </div>
            <p><strong>Topic:</strong> ${log.topic}</p>
            <p><strong>Present:</strong> ${log.students.length > 0 ? log.students.join(', ') : 'No one'}</p>
        `;
        
        logsDisplay.prepend(logItem);
    });
}