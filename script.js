const klinometerHeightInput = document.getElementById('klinometerHeight');
const elevationAngleInput = document.getElementById('elevationAngle');
const distanceToObjectInput = document.getElementById('distanceToObject');
const calculateBtn = document.getElementById('calculateBtn');
const resultContainer = document.getElementById('resultContainer');
const buildingHeightResult = document.getElementById('buildingHeightResult');
const errorMessage = document.getElementById('errorMessage');
const errorText = document.getElementById('errorText');

function showErrorMessage(message) {
    errorText.textContent = message;
    errorMessage.classList.remove('hidden');
    resultContainer.classList.add('hidden');
}

function hideErrorMessage() {
    errorMessage.classList.add('hidden');
}

calculateBtn.addEventListener('click', () => {
    hideErrorMessage();

    const klinometerHeightCm = parseFloat(klinometerHeightInput.value);
    const elevationAngleDegrees = parseFloat(elevationAngleInput.value);
    const distanceToObjectCm = parseFloat(distanceToObjectInput.value);

    if (isNaN(klinometerHeightCm) || klinometerHeightCm < 0) {
        showErrorMessage('Tinggi klinometer harus angka positif.');
        return;
    }
    if (isNaN(elevationAngleDegrees) || elevationAngleDegrees <= 0 || elevationAngleDegrees >= 90) {
        showErrorMessage('Sudut elevasi harus angka positif antara 0 dan 90 derajat.');
        return;
    }
    if (isNaN(distanceToObjectCm) || distanceToObjectCm <= 0) {
        showErrorMessage('Jarak ke objek harus angka positif.');
        return;
    }

    const klinometerHeightM = klinometerHeightCm / 100;
    const distanceToObjectM = distanceToObjectCm / 100;

    const elevationAngleRadians = elevationAngleDegrees * (Math.PI / 180);

    const heightSegment = distanceToObjectM * Math.tan(elevationAngleRadians);

    const totalBuildingHeightM = heightSegment + klinometerHeightM;

    buildingHeightResult.textContent = `${totalBuildingHeightM.toFixed(2)} m`;
    resultContainer.classList.remove('hidden');
});
