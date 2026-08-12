// ==========================================
// SYSTEM TRON CREDENTIAL DATABASE
// ==========================================

const credentials = {

    "ST-2026-001": {

        studentName:
            "Bramhadevara Hemalatha",

        course:
            "Web Development",

        institution:
            "Madanapalle Institute of Technology and Science",

        id:
            "ST-2026-001",

        issuedDate:
            "02 August 2026",

        status:
            "Active / Registered",

        registryHash:
            "0x7a92c8e4f91d3a8b6e21c4f7a90d5e31"

    }

};


// ==========================================
// LOAD AFTER HTML
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    loadCredential
);


// ==========================================
// LOAD CREDENTIAL
// ==========================================

function loadCredential() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const credentialId =
        params.get("id");


    // --------------------------------------
    // NO ID
    // --------------------------------------

    if (!credentialId) {

        showInvalidCredential(
            "No Credential ID"
        );

        return;
    }


    // --------------------------------------
    // FIND CREDENTIAL
    // --------------------------------------

    const credential =
        credentials[credentialId];


    // --------------------------------------
    // INVALID ID
    // --------------------------------------

    if (!credential) {

        showInvalidCredential(
            "Credential Not Found"
        );

        return;
    }


    // --------------------------------------
    // DISPLAY CREDENTIAL
    // --------------------------------------

    document.getElementById(
        "studentName"
    ).textContent =
        credential.studentName;


    document.getElementById(
        "course"
    ).textContent =
        credential.course;


    document.getElementById(
        "institution"
    ).textContent =
        credential.institution;


    document.getElementById(
        "displayCredentialId"
    ).textContent =
        credential.id;


    document.getElementById(
        "issuedDate"
    ).textContent =
        credential.issuedDate;


    document.getElementById(
        "status"
    ).textContent =
        credential.status;


    document.getElementById(
        "registryHash"
    ).textContent =
        credential.registryHash;

}


// ==========================================
// INVALID CREDENTIAL
// ==========================================

function showInvalidCredential(message) {

    document.getElementById(
        "studentName"
    ).textContent =
        message;


    document.getElementById(
        "course"
    ).textContent =
        "-";


    document.getElementById(
        "institution"
    ).textContent =
        "-";


    document.getElementById(
        "displayCredentialId"
    ).textContent =
        "-";


    document.getElementById(
        "issuedDate"
    ).textContent =
        "-";


    document.getElementById(
        "status"
    ).textContent =
        "Invalid";


    document.getElementById(
        "registryHash"
    ).textContent =
        "-";
}


// ==========================================
// SAVE / PRINT
// ==========================================

function downloadCredential() {

    window.print();

}