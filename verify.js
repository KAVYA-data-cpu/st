// ==========================================
// SYSTEM TRON CREDENTIAL DATABASE
// ==========================================

const credentials = {


    // ======================================
    // HEMALATHA
    // ======================================

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
            "7a92c8e4f91d3a8b6e21c4f7a90d5e31"

    },


    // ======================================
    // KALPANA
    // ======================================

    "ST-2026-002": {

        studentName:
            "Ande Kalpana",

        course:
            "Web Development",

        institution:
            "Madanapalle Institute of Technology and Science",

        id:
            "ST-2026-002",

        issuedDate:
            "02 August 2026",

        status:
            "Active / Registered",

        registryHash:
            "8b83d9f5a02e4b9c7f32d5e8a91e6f42"

    },


    // ======================================
    // KAVYA
    // ======================================

    "ST-2026-003": {

        studentName:
            "Mitta Kavya",

        course:
            "Web Development",

        institution:
            "Madanapalle Institute of Technology and Science",

        id:
            "ST-2026-003",

        issuedDate:
            "02 August 2026",

        status:
            "Active / Registered",

        registryHash:
            "9c94eaf6b13f5cad8a43e6f9b02f7a53"

    },


    // ======================================
    // KHYATHI
    // ======================================

    "ST-2026-004": {

        studentName:
            "Kedari Khyathi",

        course:
            "Web Development",

        institution:
            "Madanapalle Institute of Technology and Science",

        id:
            "ST-2026-004",

        issuedDate:
            "02 August 2026",

        status:
            "Active / Registered",

        registryHash:
            "ad05fb07c24e6dbe9a54f7a0c13b8e64"

    }

};


// ==========================================
// WAIT FOR HTML
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    loadCredential
);


// ==========================================
// LOAD CREDENTIAL
// ==========================================

function loadCredential() {

    console.log(
        "System Tron verification page loaded"
    );


    // --------------------------------------
    // GET URL PARAMETERS
    // --------------------------------------

    const params =
        new URLSearchParams(
            window.location.search
        );


    const credentialId =
        params.get("id");


    console.log(
        "Requested Credential ID:",
        credentialId
    );


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


    console.log(
        "Found Credential:",
        credential
    );


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
    // DISPLAY STUDENT NAME
    // --------------------------------------

    document.getElementById(
        "studentName"
    ).textContent =
        credential.studentName;


    // --------------------------------------
    // DISPLAY COURSE
    // --------------------------------------

    document.getElementById(
        "course"
    ).textContent =
        credential.course;


    // --------------------------------------
    // DISPLAY INSTITUTION
    // --------------------------------------

    document.getElementById(
        "institution"
    ).textContent =
        credential.institution;


    // --------------------------------------
    // DISPLAY ID
    // --------------------------------------

    document.getElementById(
        "displayCredentialId"
    ).textContent =
        credential.id;


    // --------------------------------------
    // DISPLAY DATE
    // --------------------------------------

    document.getElementById(
        "issuedDate"
    ).textContent =
        credential.issuedDate;


    // --------------------------------------
    // DISPLAY STATUS
    // --------------------------------------

    document.getElementById(
        "status"
    ).textContent =
        credential.status;


    // --------------------------------------
    // DISPLAY HASH
    // --------------------------------------

    document.getElementById(
        "registryHash"
    ).textContent =
        "0x" + credential.registryHash;


    console.log(
        "Credential displayed successfully."
    );

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


    console.log(
        "Invalid credential:",
        message
    );

}


// ==========================================
// SAVE CREDENTIAL
// ==========================================

function downloadCredential() {

    window.print();

}