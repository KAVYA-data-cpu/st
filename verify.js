// ==========================================
// SYSTEM TRON CREDENTIAL DATABASE
// ==========================================

const credentials = {

    // ======================================
    // 1. BRAMHADEVARA HEMALATHA
    // ======================================

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


    // ======================================
    // 2. VADDE HARSHITHA
    // ======================================

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
            "0x7a92c8e4f91d3a8b6e21c4f7a90d5e31"

    },


    // ======================================
    // 3. KATTUBADI HASINI
    // ======================================

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
            "0x7a92c8e4f91d3a8b6e21c4f7a90d5e31"

    },


    // ======================================
    // 4. YAMPAKULA JASMITHA
    // ======================================

    "CID:ST/INP/12462": {

        studentName:
            "YAMPAKULA JASMITHA",

        course:
            "Web Development",

        institution:
            "Madanapalle Institute of Technology and Science",

        id:
            "CID:ST/INP/12462",

        issuedDate:
            "02 August 2026",

        status:
            "Active / Registered",

        registryHash:
            "0x7a92c8e4f91d3a8b6e21c4f7a90d5e31"

    },


    // ======================================
    // 5. K. LAVANYA
    // ======================================

    "CID:ST/INP/12173": {

        studentName:
            "K.LAVANYA",

        course:
            "Web Development",

        institution:
            "Madanapalle Institute of Technology and Science",

        id:
            "CID:ST/INP/12173",

        issuedDate:
            "02 August 2026",

        status:
            "Active / Registered",

        registryHash:
            "0x7a92c8e4f91d3a8b6e21c4f7a90d5e31"

    },


    // ======================================
    // 6. MUTHINENI JAYASREE
    // ======================================

    "CID:ST/INP/12561": {

        studentName:
            "MUTHINENI JAYASREE",

        course:
            "Web Development",

        institution:
            "Madanapalle Institute of Technology and Science",

        id:
            "CID:ST/INP/12561",

        issuedDate:
            "02 August 2026",

        status:
            "Active / Registered",

        registryHash:
            "0x7a92c8e4f91d3a8b6e21c4f7a90d5e31"

    }
    
    "CID:ST/INP/12561": {

        studentName:
            "PINDALA LAHARI",

        course:
            "Web Development",

        institution:
            "Madanapalle Institute of Technology and Science",

        id:
            "CID:ST/INP/12528",

        issuedDate:
            "02 August 2026",

        status:
            "Active / Registered",

        registryHash:
            "0x7a92c8e4f91d3a8b6e21c4f7a90d5e31"

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

    // Get ID from URL
    const params =
        new URLSearchParams(
            window.location.search
        );


    const credentialId =
        params.get("id");


    // ======================================
    // NO ID IN URL
    // ======================================

    if (!credentialId) {

        showInvalidCredential(
            "No Credential ID"
        );

        return;
    }


    // ======================================
    // FIND CREDENTIAL
    // ======================================

    const credential =
        credentials[credentialId];


    // ======================================
    // CREDENTIAL NOT FOUND
    // ======================================

    if (!credential) {

        showInvalidCredential(
            "Credential Not Found"
        );

        return;
    }


    // ======================================
    // DISPLAY STUDENT NAME
    // ======================================

    document.getElementById(
        "studentName"
    ).textContent =
        credential.studentName;


    // ======================================
    // DISPLAY COURSE
    // ======================================

    document.getElementById(
        "course"
    ).textContent =
        credential.course;


    // ======================================
    // DISPLAY INSTITUTION
    // ======================================

    document.getElementById(
        "institution"
    ).textContent =
        credential.institution;


    // ======================================
    // DISPLAY CREDENTIAL ID
    // ======================================

    document.getElementById(
        "displayCredentialId"
    ).textContent =
        credential.id;


    // ======================================
    // DISPLAY ISSUED DATE
    // ======================================

    document.getElementById(
        "issuedDate"
    ).textContent =
        credential.issuedDate;


    // ======================================
    // DISPLAY STATUS
    // ======================================

    document.getElementById(
        "status"
    ).textContent =
        credential.status;


    // ======================================
    // DISPLAY REGISTRY HASH
    // ======================================

    document.getElementById(
        "registryHash"
    ).textContent =
        credential.registryHash;

}


// ==========================================
// INVALID CREDENTIAL
// ==========================================

function showInvalidCredential(message) {

    // Student name
    document.getElementById(
        "studentName"
    ).textContent =
        message;


    // Course
    document.getElementById(
        "course"
    ).textContent =
        "-";


    // Institution
    document.getElementById(
        "institution"
    ).textContent =
        "-";


    // Credential ID
    document.getElementById(
        "displayCredentialId"
    ).textContent =
        "-";


    // Issued date
    document.getElementById(
        "issuedDate"
    ).textContent =
        "-";


    // Status
    document.getElementById(
        "status"
    ).textContent =
        "Invalid";


    // Registry hash
    document.getElementById(
        "registryHash"
    ).textContent =
        "-";

}


// ==========================================
// SAVE / PRINT CREDENTIAL
// ==========================================

function downloadCredential() {

    window.print();

}