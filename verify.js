// ==========================================
// SYSTEM TRON CREDENTIAL DATABASE
// ==========================================

const credentials = {

    // --------------------------------------
    // BRAMHADEVARA HEMALATHA
    // --------------------------------------

    "CID:ST/INP/12280": {

        studentName:
            "Bramhadevara Hemalatha",

        course:
            "Web Development",

        institution:
            "Madanapalle Institute of Technology and Science",

        id:
            "CID:ST/INP/12280",

        issuedDate:
            "02 August 2026",

        status:
            "Active / Registered",

        registryHash:
            "0x7a92c8e4f91d3a8b6e21c4f7a90d5e31"

    },


    // --------------------------------------
    // VADDE HARSHITHA
    // --------------------------------------

    "CID:ST/INP/12464": {

        studentName:
            "Vadde Harshitha",

        course:
            "Web Development",

        institution:
            "Madanapalle Institute of Technology and Science",

        id:
            "CID:ST/INP/12464",

        issuedDate:
            "02 August 2026",

        status:
            "Active / Registered",

        registryHash:
            "0x4b83d91e62a7f5c8d31e9a46b2f70815"

    },


    // --------------------------------------
    // KATTUBADI HASINI
    // --------------------------------------

    "CID:ST/INP/12247": {

        studentName:
            "Kattubadi Hasini",

        course:
            "Web Development",

        institution:
            "Madanapalle Institute of Technology and Science",

        id:
            "CID:ST/INP/12247",

        issuedDate:
            "02 August 2026",

        status:
            "Active / Registered",

        registryHash:
            "0x91c57e3a84d26b7f5e10c943a68d2f31"

    }

};


// ==========================================
// LOAD AFTER HTML IS READY
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
    // DISPLAY STUDENT
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