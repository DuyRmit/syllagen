// ===================================================================================
// 1. DATA OBJECT
// This object contains the data that is unique to each school template.
// ===================================================================================

const schoolData = {
    TBS: {
        headerImageSrc: "/courses/120329/files/44056963/preview",
        imageSrcs: ["/courses/120329/files/44053587/preview", "/courses/120329/files/44053588/preview", "/courses/120329/files/44053589/preview", "/courses/120329/files/30651988/preview", "/courses/120329/files/30651979/preview", "/courses/120329/files/30651986/preview", "/courses/120329/files/30651982/preview", "/courses/120329/files/30651983/preview", "/courses/120329/files/30651980/preview", "/courses/120329/files/30651984/preview", "/courses/120329/files/30651985/preview", "/courses/120329/files/30651987/preview"]
    },
    SSET: {
        headerImageSrc: "/courses/137273/files/37388448/preview",
        imageSrcs: ["/courses/137273/files/37388452/preview", "/courses/137273/files/37388453/preview", "/courses/137273/files/37388454/preview", "/courses/137273/files/37388455/preview", "/courses/137273/files/37388456/preview", "/courses/137273/files/37388457/preview", "/courses/137273/files/37388458/preview", "/courses/137273/files/37388459/preview", "/courses/137273/files/37388460/preview", "/courses/137273/files/37388461/preview", "/courses/137273/files/37388462/preview", "/courses/137273/files/37388463/preview"]
    },
    SCD: {
        programs: {
            gameDesign: {
                headerImageSrc: "https://rmit.instructure.com/courses/127977/files/45942786/preview",
                imageSrcs: ["https://rmit.instructure.com/courses/127977/files/33691033/preview", "https://rmit.instructure.com/courses/127977/files/33691034/preview", "https://rmit.instructure.com/courses/127977/files/33691035/preview", "https://rmit.instructure.com/courses/127977/files/33691036/preview", "https://rmit.instructure.com/courses/127977/files/33691037/preview", "https://rmit.instructure.com/courses/127977/files/33691038/preview", "https://rmit.instructure.com/courses/127977/files/33691039/preview", "https://rmit.instructure.com/courses/127977/files/33691041/preview", "https://rmit.instructure.com/courses/127977/files/33691042/preview", "https://rmit.instructure.com/courses/127977/files/33691043/preview", "https://rmit.instructure.com/courses/127977/files/33691044/preview", "https://rmit.instructure.com/courses/127977/files/33691045/preview"]
            },
            filmAndVideo: {
                headerImageSrc: "https://rmit.instructure.com/courses/127983/files/33788546/preview",
                imageSrcs: ["https://rmit.instructure.com/courses/127983/files/33788578/preview", "https://rmit.instructure.com/courses/127983/files/33789041/preview", "https://rmit.instructure.com/courses/127983/files/33789061/preview", "https://rmit.instructure.com/courses/127983/files/33789039/preview", "https://rmit.instructure.com/courses/127983/files/33789062/preview", "https://rmit.instructure.com/courses/127983/files/33788625/preview", "https://rmit.instructure.com/courses/127983/files/33789063/preview", "https://rmit.instructure.com/courses/127983/files/33788672/preview", "https://rmit.instructure.com/courses/127983/files/33789040/preview", "https://rmit.instructure.com/courses/127983/files/33788730/preview", "https://rmit.instructure.com/courses/127983/files/33789038/preview", "https://rmit.instructure.com/courses/127983/files/33789064/preview"]
            },
             language: {
                headerImageSrc: "https://rmit.instructure.com/courses/150784/files/42997146/preview",
                imageSrcs: ["https://rmit.instructure.com/courses/150784/files/42999336/preview", "https://rmit.instructure.com/courses/150784/files/42999337/preview", "https://rmit.instructure.com/courses/150784/files/42999335/preview", "https://rmit.instructure.com/courses/150784/files/42999338/preview", "https://rmit.instructure.com/courses/150784/files/42999339/preview", "https://rmit.instructure.com/courses/150784/files/42999340/preview", "https://rmit.instructure.com/courses/150784/files/42999341/preview", "https://rmit.instructure.com/courses/150784/files/42999342/preview", "https://rmit.instructure.com/courses/150784/files/42999343/preview", "https://rmit.instructure.com/courses/150784/files/42999344/preview", "https://rmit.instructure.com/courses/150784/files/42999345/preview", "https://rmit.instructure.com/courses/150784/files/42999346/preview"]
            },
            fashionEnterprise: {
                headerImageSrc: "https://rmit.instructure.com/courses/127814/files/33710924/preview",
                imageSrcs: ["https://rmit.instructure.com/courses/127814/files/33606925/preview", "https://rmit.instructure.com/courses/127814/files/33606926/preview", "https://rmit.instructure.com/courses/127814/files/33606927/preview", "https://rmit.instructure.com/courses/127814/files/33606929/preview", "https://rmit.instructure.com/courses/127814/files/33606930/preview", "https://rmit.instructure.com/courses/127814/files/33606931/preview", "https://rmit.instructure.com/courses/127814/files/33606933/preview", "https://rmit.instructure.com/courses/127814/files/33606934/preview", "https://rmit.instructure.com/courses/127814/files/33606935/preview", "https://rmit.instructure.com/courses/127814/files/33606937/preview", "https://rmit.instructure.com/courses/127814/files/33606938/preview", "https://rmit.instructure.com/courses/127814/files/33606924/preview"]
            },
            digitalMedia: {
                headerImageSrc: "https://rmit.instructure.com/courses/120115/files/42996112/preview",
                imageSrcs: ["https://rmit.instructure.com/courses/120115/files/33788523/preview", "https://rmit.instructure.com/courses/120115/files/33727191/preview", "https://rmit.instructure.com/courses/120115/files/42947156/preview", "https://rmit.instructure.com/courses/120115/files/33727193/preview", "https://rmit.instructure.com/courses/120115/files/33727194/preview", "https://rmit.instructure.com/courses/120115/files/33727195/preview", "https://rmit.instructure.com/courses/120115/files/33727196/preview", "https://rmit.instructure.com/courses/120115/files/33727198/preview", "https://rmit.instructure.com/courses/120115/files/33727199/preview", "https://rmit.instructure.com/courses/120115/files/33727200/preview", "https://rmit.instructure.com/courses/120115/files/33727202/preview", "https://rmit.instructure.com/courses/120115/files/33727203/preview"]
            },
            designStudies: {
                headerImageSrc: "https://rmit.instructure.com/courses/127976/files/45945298/preview",
                imageSrcs: ["https://rmit.instructure.com/courses/127976/files/33675135/preview", "https://rmit.instructure.com/courses/127976/files/33675136/preview", "https://rmit.instructure.com/courses/127976/files/33675137/preview", "https://rmit.instructure.com/courses/127976/files/33675138/preview", "https://rmit.instructure.com/courses/127976/files/33675139/preview", "https://rmit.instructure.com/courses/127976/files/33675140/preview", "https://rmit.instructure.com/courses/127976/files/33675144/preview", "https://rmit.instructure.com/courses/127976/files/33675145/preview", "https://rmit.instructure.com/courses/127976/files/33675146/preview", "https://rmit.instructure.com/courses/127976/files/33675148/preview", "https://rmit.instructure.com/courses/127976/files/33675149/preview", "https://rmit.instructure.com/courses/127976/files/33675150/preview"]
            },
            profcomDigitalCommunication: {
                headerImageSrc: "https://rmit.instructure.com/courses/127984/files/44384628/preview",
                imageSrcs: ["https://rmit.instructure.com/courses/127984/files/44384643/preview", "https://rmit.instructure.com/courses/127984/files/44384717/preview", "https://rmit.instructure.com/courses/127984/files/44384721/preview", "https://rmit.instructure.com/courses/127984/files/44384735/preview", "https://rmit.instructure.com/courses/127984/files/44384736/preview", "https://rmit.instructure.com/courses/127984/files/44384737/preview", "https://rmit.instructure.com/courses/127984/files/44384738/preview", "https://rmit.instructure.com/courses/127984/files/44384740/preview", "https://rmit.instructure.com/courses/127984/files/44384741/preview", "https://rmit.instructure.com/courses/127984/files/44384742/preview", "https://rmit.instructure.com/courses/127984/files/44384743/preview", "https://rmit.instructure.com/courses/127984/files/44384733/preview"]
            },
            profcomAdvertising: {
                headerImageSrc: "https://rmit.instructure.com/courses/150785/files/44397163/preview",
                imageSrcs: ["https://rmit.instructure.com/courses/150785/files/44397302/preview", "https://rmit.instructure.com/courses/150785/files/44397306/preview", "https://rmit.instructure.com/courses/150785/files/44397623/preview", "https://rmit.instructure.com/courses/150785/files/44397307/preview", "https://rmit.instructure.com/courses/150785/files/44397621/preview", "https://rmit.instructure.com/courses/150785/files/44397308/preview", "https://rmit.instructure.com/courses/150785/files/44397310/preview", "https://rmit.instructure.com/courses/150785/files/44397311/preview", "https://rmit.instructure.com/courses/150785/files/44397312/preview", "https://rmit.instructure.com/courses/150785/files/44397313/preview", "https://rmit.instructure.com/courses/150785/files/44397622/preview", "https://rmit.instructure.com/courses/150785/files/44397314/preview"]
            },
            profcomPublicRelations: {
                headerImageSrc: "https://rmit.instructure.com/courses/150786/files/43955259/preview",
                imageSrcs: ["https://rmit.instructure.com/courses/150786/files/43954817/preview", "https://rmit.instructure.com/courses/150786/files/43954806/preview", "https://rmit.instructure.com/courses/150786/files/43954807/preview", "https://rmit.instructure.com/courses/150786/files/43954808/preview", "https://rmit.instructure.com/courses/150786/files/43954809/preview", "https://rmit.instructure.com/courses/150786/files/43954810/preview", "https://rmit.instructure.com/courses/150786/files/43954811/preview", "https://rmit.instructure.com/courses/150786/files/43954812/preview", "https://rmit.instructure.com/courses/150786/files/43954813/preview", "https://rmit.instructure.com/courses/150786/files/43954814/preview", "https://rmit.instructure.com/courses/150786/files/43954815/preview", "https://rmit.instructure.com/courses/150786/files/43954816/preview"]
            }
        }
    }
};

// ===================================================================================
// 2. APPLICATION LOGIC & DOM MANIPULATION
// ===================================================================================

document.addEventListener('DOMContentLoaded', () => {

    const schoolSelect = document.getElementById("school");
    const scdProgramContainer = document.getElementById("scd-program-container");
    const form = document.getElementById("syllabus-form");
    const copyButton = document.getElementById("copy-button");

    // --- HELPER FUNCTIONS ---

    function handleSchoolChange() {
        scdProgramContainer.style.display = (schoolSelect.value === 'SCD') ? 'block' : 'none';
    }

    function generateModuleFields() {
        const layoutChoice = parseInt(document.getElementById("layout-choice").value);
        const container = document.getElementById("module-container");
        container.innerHTML = "";

        let gridRow = '<div class="grid-row">';
        for (let i = 1; i <= layoutChoice; i++) {
            gridRow += `
                <div class="col-md-4">
                    <div class="module-box">
                        <h3>Module ${i}</h3>
                        <label for="module-name-${i}">New Module Name:</label>
                        <input type="text" id="module-name-${i}" name="module-name-${i}" placeholder="Leave blank to keep original">
                        <label for="topic-and-content-areas-${i}">New Topic/Content:</label>
                        <textarea id="topic-and-content-areas-${i}" name="topic-and-content-areas-${i}" rows="3" placeholder="Leave blank to keep original"></textarea>
                    </div>
                </div>
            `;
            if (i % 3 === 0 && i !== layoutChoice) {
                gridRow += '</div><div class="grid-row">';
            }
        }
        gridRow += '</div>';
        container.innerHTML = gridRow;
    }

    function getSequenceCode(weekNumber, ilwPosition, totalWeeks) {
        if (weekNumber === ilwPosition) return "ILW";
        let letterIndex = (weekNumber < ilwPosition) ? weekNumber - 1 : weekNumber - 2;
        const maxLetters = totalWeeks === 12 ? 11 : 7;
        if (letterIndex >= 0 && letterIndex < maxLetters) return "T" + String.fromCharCode(65 + letterIndex);
        return "";
    }

    // --- MAIN FORM SUBMISSION LOGIC ---

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // 1. Get user inputs
        const userHTML = document.getElementById("user-html").value;
        if (!userHTML.trim()) {
            alert("Please paste your syllabus HTML first.");
            return;
        }
        const school = schoolSelect.value;
        const scdProgram = document.getElementById("scd-program").value;
        const layoutChoice = parseInt(document.getElementById("layout-choice").value);
        const ilwPosition = parseInt(document.getElementById("ilw-position").value);
        const coursePromise = document.getElementById("course-promise").value;

        // 2. Parse the user's HTML into a modifiable DOM object
        const parser = new DOMParser();
        const doc = parser.parseFromString(userHTML, 'text/html');

        // 3. Select the correct image data based on school/program selection
        let currentImageData;
        if (school === 'SCD') {
            currentImageData = schoolData.SCD.programs[scdProgram];
        } else {
            currentImageData = schoolData[school];
        }

        // 4. Update the header banner image
        const headerImage = doc.querySelector('.emble-banner img, [id*="emble-customise"] img');
        if (headerImage && currentImageData.headerImageSrc) {
            headerImage.src = currentImageData.headerImageSrc;
        }
        
        // 5. Update the Course Promise
        if (coursePromise.trim() !== "") {
            const coursePromiseElement = doc.querySelector('table.stem-bg-shadow p:first-child span');
            if (coursePromiseElement) {
                coursePromiseElement.textContent = coursePromise;
            }
        }

        // 6. Process each module
        const moduleContainers = doc.querySelectorAll('.col-xs-12.col-lg-4, .col-xs-12.col-lg-6');
        moduleContainers.forEach((container, index) => {
            if (index >= layoutChoice) return; // Skip extra modules if layout is smaller
            
            const moduleNumber = index + 1;

            // a. Update module thumbnail image
            const moduleImage = container.querySelector('img');
            if (moduleImage && currentImageData.imageSrcs[index]) {
                moduleImage.src = currentImageData.imageSrcs[index];
            }

            // b. Update module name (if user provided one)
            const newModuleName = document.querySelector(`input[name="module-name-${moduleNumber}"]`).value;
            if (newModuleName.trim() !== "") {
                const moduleNameElement = container.querySelector('h3 a span span'); // Deepest span holds the name
                if (moduleNameElement) {
                    moduleNameElement.innerHTML = moduleNameElement.innerHTML.replace(/(^\d+\.\s+)(.*)/, `$1${newModuleName}`);
                }
            }
            
            // c. Update module description (if user provided one)
            const newModuleDesc = document.querySelector(`textarea[name="topic-and-content-areas-${moduleNumber}"]`).value;
            if (newModuleDesc.trim() !== "") {
                const moduleDescElement = container.querySelector('p span');
                if (moduleDescElement) {
                    moduleDescElement.textContent = newModuleDesc;
                }
            }

            // d. Inject data-ruvn-sequence attribute
            const sequenceCode = getSequenceCode(moduleNumber, ilwPosition, layoutChoice);
            if (sequenceCode) {
                container.setAttribute('data-ruvn-sequence', sequenceCode);
            }

            // e. Inject data-ruvn-number attribute inside the title
            const titleLink = container.querySelector('h3 a');
            if (titleLink && !titleLink.querySelector('span[data-ruvn-number]')) {
                const titleSpan = titleLink.querySelector('span > span');
                if (titleSpan && titleSpan.textContent.match(/\d+/)) {
                     titleSpan.innerHTML = titleSpan.innerHTML.replace(/(\d+)/, `<span data-ruvn-number="$1">$1</span>`);
                }
            }
        });

        // 7. Output the final, modified HTML
        const generatedCode = doc.body.innerHTML;
        document.getElementById("generated-code").textContent = generatedCode;
        copyButton.style.display = "inline-block";
    });

    copyButton.addEventListener("click", function () {
        const generatedCode = document.getElementById("generated-code").textContent;
        navigator.clipboard.writeText(generatedCode).then(() => {
            alert("Code copied to clipboard!");
        }).catch(err => {
            console.error("Failed to copy: ", err);
            alert("Copy to clipboard failed. Please copy manually.");
        });
    });

    // --- INITIALIZATION ---
    schoolSelect.addEventListener("change", handleSchoolChange);
    document.getElementById("layout-choice").addEventListener("change", generateModuleFields);
    handleSchoolChange();
    generateModuleFields();
});
