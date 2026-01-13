function cekStatus() {
    const statusDiv = document.getElementById('status-system');
    const host = window.location.hostname;

    if (host === "" || host === "127.0.0.1" || host === "localhost") {
        statusDiv.innerHTML = `
            <div class="alert alert-warning border-0 shadow-sm">
                <strong>Mode Preview Lokal:</strong><br>
                Skrip berjalan, tetapi website belum diakses melalui Web Server (Apache).
            </div>
        `;
    } else {
        statusDiv.innerHTML = `
            <div class="alert alert-success border-0 shadow-sm">
                <strong>System Live!</strong><br>
                Web Server Apache berhasil melayani permintaan dari Host: <strong>${host}</strong>
            </div>
        `;
    }

    console.log("Cek status dilakukan pada host: " + host);
}

window.onload = () => {
    console.log("Website LKS Ma'arif NU Siap Berhasil Dimuat")
    console.log("Website LKS Ma'arif NU Siap. Menunggu interaksi...");
};