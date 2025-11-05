const templates = {
    TBS: {
        header: `
<div id="emble-customise-7d97b62b" class="customise emble emble-banner emble-prevent-insert emble-prevent-delete-recursive emble-banner-theme-rmit-light" style="padding: 0px; margin: 0px;" title="embedded content" data-context-menu="customise delete" data-customise="new-banner-theme" data-emble-name="Banner" data-emble-version="2.0">
    <div>
        <div style="display: grid; grid-template-columns: repeat(20,1fr); grid-auto-rows: 1fr; height: auto;">
            <div style="grid-column: 1/21; grid-row: 1/12; z-index: 1; height: 100%; overflow: hidden; position: relative;">
                <div style="width: 1040px; height: 100%;"><img style="display: block; min-height: 100%; width: 1040px; top: 0; left: 0;" role="presentation;" src="/courses/120329/files/44056963/preview" alt="" data-ally-user-updated-alt="" data-decorative="true" data-api-returntype="File" data-api-endpoint="https://rmit.instructure.com/api/v1/courses/119776/files/44056963" /></div>
            </div>
            <h2 style="grid-column: 2/20; grid-row: 4/10; z-index: 3; max-width: 100%;"><span style="vertical-align: middle; display: inline-block; text-align: left; color: #222160; text-decoration: none; font-family: museo700; font-size: 32pt;"><span class="stem-header-box-decoration-break" style="background-color: #e3e5e0; padding: 3px 15px; font-size: 32pt;">{{courseName}}</span></span><br /><span style="color: #ffffff; font-family: museo300;"><span style="font-size: 16px; background-color: #e61e2a; padding: 3px 15px;"><strong>{{courseCode}} | {{schoolName}}</strong></span></span></h2>
            <div class="emble-banner-accent" style="z-index: 2; grid-row: 10/12;">
                <div class="ribbon" style="grid-row: 10/12;"><img class="pixel-regular" src="/courses/88862/files/19139937/preview" data-api-endpoint="https://rmit.instructure.com/api/v1/courses/88862/files/19139937" data-api-returntype="File" /></div>
            </div>
        </div>
    </div>
</div>
<p class="narrow-p"> </p>
<table class="stem-bg-shadow" style="border-collapse: collapse; width: 100%; margin-left: auto; margin-right: auto; border: 1px solid #f1f2f3; border-top: 5px solid #222160;" role="presentation" cellpadding="10px">
    <tbody>
        <tr>
            <td style="width: 100%; padding: 20px;">
                <p><span dir="ltr">{{coursePromise}}</span></p>
                <p><span><span class="TextRun SCXW24004924 BCX0" lang="EN-AU" data-contrast="auto"><span class="NormalTextRun SCXW24004924 BCX0">This Canvas course site will provide activities and materials to help you learn. You will also submit your <a class="inline_disabled" href="/courses/120329/assignments">assessments</a> here. If you're not sure how to do something, check out our <a class="inline_disabled" href="/courses/120329/pages/getting-help#canvas">help with Canvas</a>. </span></span></span></p>
                <p>This course includes various interactive activities. If you're using a screen reader for the first time, refer to the <a class="inline_disabled" href="/courses/101397/pages/interactive-activity-instructions" target="_blank" rel="noopener">Interactive Activity Instructions</a> for guidance.</p>
                <p id="emble-customise-5e591084" class="btn emble-btn customise emble-prevent-delete-recursive btn-blue" data-context-menu="customise rce-link rce-course-links delete" data-customise="icon button-theme" data-emble-name="Button" data-emble-version="2.0"><a> <i class="icon-none"></i></a> <a class="inline_disabled" title="Link" href="/courses/120329/modules/items/5085615">Getting Started</a></p>
                <span> </span>
                <p id="emble-customise-228a2824" class="btn emble-btn btn-blue customise emble-prevent-delete-recursive" data-context-menu="customise rce-link rce-course-links delete" data-customise="icon button-theme" data-emble-name="Button" data-emble-version="2.0"><a><i class="icon-none"> </i></a><a class="inline_disabled" title="Link" href="http://www1.rmit.edu.au/browse;ID=msrkgrf8e6ef1" target="_blank" rel="noopener">Course Guide </a></p>
                <span> </span>
                <p id="emble-customise-228a2824" class="btn emble-btn btn-blue customise emble-prevent-delete-recursive" data-context-menu="customise rce-link rce-course-links delete" data-customise="icon button-theme" data-emble-name="Button" data-emble-version="2.0"><a><i class="icon-none"> </i></a><a class="inline_disabled" title="Link" href="/courses/120329/modules/items/5085621">Digital Class Links</a></p>
            </td>
        </tr>
    </tbody>
</table>`,
        moduleTemplate12: `
<div class="col-xs-12 col-lg-4" style="margin-top: 30px;">
    <div id="1" style="display: table; height: 100%; border-bottom: 3px solid #222160;">
        <div style="display: table-row;">
            <div style="display: table-cell; background-color: #f0f1ef;"><img id="19447393" role="presentation" src="{{imageSrc}}" alt="" data-ally-user-updated-alt="" data-decorative="true" data-api-returntype="File" data-api-endpoint="{{imageEndpoint}}" /></div>
        </div>
        <div style="display: table-row;">
            <div style="display: table-cell; height: 100%; background-color: #f0f1ef; text-decoration: none; padding: 0px 20px 0px 20px; text-align: left;">
                <h3><a class="inline_disabled" style="text-decoration: none;" href="{{moduleLink}}" data-api-endpoint="{{moduleEndpoint}}" data-api-returntype="Page"><span style="font-size: 16pt; color: #222160; font-family: museo500; border-bottom: 3px solid #222160;"><span>{{moduleNumber}}. {{moduleName}}</span></span></a></h3>
                <p><span class="ui-provider fz b c d e f g h i j k l m n o p q r s t u v w x y z ab ac ae af ag ah ai aj ak" dir="ltr">{{topicAndContentAreas}}</span></p>
            </div>
        </div>
    </div>
</div>`,
        moduleTemplate8: `
<div class="col-xs-12 col-lg-6" style="margin-top: 30px;">
    <div id="1" style="display: table; height: 100%; border-bottom: 3px solid #222160;">
        <div style="display: table-row;">
            <div style="display: table-cell; background-color: #f0f1ef;"><img id="19447393" role="presentation" src="{{imageSrc}}" alt="" data-ally-user-updated-alt="" data-decorative="true" data-api-returntype="File" data-api-endpoint="{{imageEndpoint}}" /></div>
        </div>
        <div style="display: table-row;">
            <div style="display: table-cell; height: 100%; background-color: #f0f1ef; text-decoration: none; padding: 0px 20px 0px 20px; text-align: left;">
                <h3><a class="inline_disabled" style="text-decoration: none;" href="{{moduleLink}}" data-api-endpoint="{{moduleEndpoint}}" data-api-returntype="Page"><span style="font-size: 16pt; color: #222160; font-family: museo500; border-bottom: 3px solid #222160;"><span>{{moduleNumber}}. {{moduleName}}</span></span></a></h3>
                <p><span class="ui-provider fz b c d e f g h i j k l m n o p q r s t u v w x y z ab ac ae af ag ah ai aj ak" dir="ltr">{{topicAndContentAreas}}</span></p>
            </div>
        </div>
    </div>
</div>`,
        imageSrcs: ["/courses/120329/files/44053587/preview", "/courses/120329/files/44053588/preview", "/courses/120329/files/44053589/preview", "/courses/120329/files/30651988/preview", "/courses/120329/files/30651979/preview", "/courses/120329/files/30651986/preview", "/courses/120329/files/30651982/preview", "/courses/120329/files/30651983/preview", "/courses/120329/files/30651980/preview", "/courses/120329/files/30651984/preview", "/courses/120329/files/30651985/preview", "/courses/120329/files/30651987/preview"],
        imageEndpoints: ["https://rmit.instructure.com/api/v1/courses/119776/files/44053587", "https://rmit.instructure.com/api/v1/courses/116733/files/44053588", "https://rmit.instructure.com/api/v1/courses/119776/files/44053589", "https://rmit.instructure.com/api/v1/courses/119776/files/30419416", "https://rmit.instructure.com/api/v1/courses/119776/files/30419422", "https://rmit.instructure.com/api/v1/courses/119776/files/30419414", "https://rmit.instructure.com/api/v1/courses/119776/files/30419417", "https://rmit.instructure.com/api/v1/courses/119776/files/30419420", "https://rmit.instructure.com/api/v1/courses/119776/files/30419412", "https://rmit.instructure.com/api/v1/courses/119776/files/30419415", "https://rmit.instructure.com/api/v1/courses/119776/files/30419423", "https://rmit.instructure.com/api/v1/courses/119776/files/30419421"],
        moduleLinks: ["/courses/120329/modules/items/5085622", "/courses/120329/modules/items/5085633", "/courses/120329/modules/items/5085644", "/courses/120329/modules/items/5085655", "/courses/120329/modules/items/5085666", "/courses/120329/modules/items/5085677", "/courses/120329/modules/items/5085688", "/courses/120329/modules/items/5085699", "/courses/120329/modules/items/5085710", "/courses/120329/modules/items/5085721", "/courses/120329/modules/items/5085732", "/courses/120329/modules/items/5085743"],
        moduleEndpoints: ["https://rmit.instructure.com/api/v1/courses/119776/pages/1-dot-0-%257C-overview", "/courses/120329/modules/items/5085633", "/courses/120329/modules/items/5085644", "https://rmit.instructure.com/api/v1/courses/119776/pages/4-dot-0-%257C-overview", "https://rmit.instructure.com/api/v1/courses/119776/pages/5-dot-0-%257C-overview", "$CANVAS_COURSE_REFERENCE$/modules/items/g8293266912e11f94ce998fe9b867bc68", "$CANVAS_COURSE_REFERENCE$/modules/items/g0209280223144c3360b5f8e5a0edbfb3", "$CANVAS_COURSE_REFERENCE$/modules/items/g8c489ddfcf14b15b5922051bec8aca50", "$CANVAS_COURSE_REFERENCE$/modules/items/g04e7b8e554273d58e6af8ae79ce08629", "$CANVAS_COURSE_REFERENCE$/modules/items/gcc39d9fe92dc75b9b3bba9f91238959d", "$CANVAS_COURSE_REFERENCE$/modules/items/g98ecd0afd24db9c9cdcaf9740f615a63", "$CANVAS_COURSE_REFERENCE$/modules/items/g862ce18abc82e8d747f5d125c7b5261a"]
    },
    SSET: {
        header: `
<div id="emble-customise-b10fdf7c" class="customise emble emble-banner emble-prevent-insert emble-prevent-delete-recursive emble-banner-theme-rmit-light" style="padding: 0px; margin: 0px;" title="embedded content" data-context-menu="customise delete" data-customise="new-banner-theme" data-emble-name="Banner" data-emble-version="2.0">
    <div>
        <div style="display: grid; grid-template-columns: repeat(20,1fr); grid-auto-rows: 1fr; height: auto;">
            <div style="grid-column: 1/21; grid-row: 1/12; z-index: 1; height: 100%; overflow: hidden; position: relative;">
                <div style="width: 1040px; height: 100%;"><img style="display: block; min-height: 100%; width: 1040px; top: 0; left: 0;" role="presentation;" src="/courses/137273/files/37388448/preview" alt="" data-ally-user-updated-alt="" data-decorative="true" data-api-returntype="File" data-api-endpoint="https://rmit.instructure.com/api/v1/courses/119776/files/30419411" /></div>
            </div>
            <h2 style="grid-column: 2/20; grid-row: 4/10; z-index: 3; max-width: 100%;"><span style="vertical-align: middle; display: inline-block; text-align: left; color: #222160; text-decoration: none; font-family: museo700; font-size: 32pt;"><span class="stem-header-box-decoration-break" style="background-color: #e3e5e0; padding: 3px 15px; font-size: 32pt;">{{courseName}}</span></span><br /><span style="color: #ffffff; font-family: museo300;"><span style="font-size: 16px; background-color: #e61e2a; padding: 3px 15px;"><strong>{{courseCode}} | {{schoolName}}</strong></span></span></h2>
            <div class="emble-banner-accent" style="z-index: 2; grid-row: 10/12;">
                <div class="ribbon" style="grid-row: 10/12;"><img class="pixel-regular" src="/courses/88862/files/19139937/preview" data-api-endpoint="https://rmit.instructure.com/api/v1/courses/88862/files/19139937" data-api-returntype="File" /></div>
            </div>
        </div>
    </div>
</div>
<p class="narrow-p"> </p>
<table class="stem-bg-shadow" style="border-collapse: collapse; width: 100%; margin-left: auto; margin-right: auto; border: 1px solid #f1f2f3; border-top: 5px solid #222160;" role="presentation" cellpadding="10px">
    <tbody>
        <tr>
            <td style="width: 100%; padding: 20px;">
                <p><span dir="ltr">{{coursePromise}}</span></p>
                <p><span><span class="TextRun SCXW24004924 BCX0" lang="EN-AU" data-contrast="auto"><span class="NormalTextRun SCXW24004924 BCX0">This Canvas course site will provide activities and materials to help you learn. You will also submit your <a class="inline_disabled" href="/courses/137273/assignments">assessments</a> here. If you're not sure how to do something, check out our <a class="inline_disabled" href="/courses/137273/pages/getting-help#canvas">help with Canvas</a>. </span></span></span></p>
                <p id="emble-customise-5e591084" class="btn emble-btn customise emble-prevent-delete-recursive btn-blue" data-context-menu="customise rce-link rce-course-links delete" data-customise="icon button-theme" data-emble-name="Button" data-emble-version="2.0"><a> <i class="icon-none"></i></a> <a class="inline_disabled" title="Link" href="/courses/137273/modules/items/6140111">Getting Started</a></p>
                <span> </span>
                <p id="emble-customise-228a2824" class="btn emble-btn btn-blue customise emble-prevent-delete-recursive" data-context-menu="customise rce-link rce-course-links delete" data-customise="icon button-theme" data-emble-name="Button" data-emble-version="2.0"><a><i class="icon-none"> </i></a><a class="inline_disabled" title="Link" href="http://www1.rmit.edu.au/browse;ID=msrkgrf8e6ef1" target="_blank" rel="noopener">Course Guide </a></p>
                <span> </span>
                <p id="emble-customise-228a2824" class="btn emble-btn btn-blue customise emble-prevent-delete-recursive" data-context-menu="customise rce-link rce-course-links delete" data-customise="icon button-theme" data-emble-name="Button" data-emble-version="2.0"><a><i class="icon-none"> </i></a><a class="inline_disabled" title="Link" href="/courses/137273/modules/items/6140118">Digital Class Links</a></p>
            </td>
        </tr>
    </tbody>
</table>`,
        moduleTemplate12: `
<div class="col-xs-12 col-lg-4" style="margin-top: 30px;">
    <div id="1" style="display: table; height: 100%; border-bottom: 3px solid #222160;">
        <div style="display: table-row;">
            <div style="display: table-cell; background-color: #f0f1ef;"><img id="19447393" role="presentation" src="{{imageSrc}}" alt="" data-ally-user-updated-alt="" data-decorative="true" data-api-returntype="File" data-api-endpoint="{{imageEndpoint}}" /></div>
        </div>
        <div style="display: table-row;">
            <div style="display: table-cell; height: 100%; background-color: #f0f1ef; text-decoration: none; padding: 0px 20px 0px 20px; text-align: left;">
                <h3><a class="inline_disabled" style="text-decoration: none;" href="{{moduleLink}}" data-api-endpoint="{{moduleEndpoint}}" data-api-returntype="Page"><span style="font-size: 16pt; color: #222160; font-family: museo500; border-bottom: 3px solid #222160;"><span>{{moduleNumber}}. {{moduleName}}</span></span></a></h3>
                <p><span class="ui-provider fz b c d e f g h i j k l m n o p q r s t u v w x y z ab ac ae af ag ah ai aj ak" dir="ltr">{{topicAndContentAreas}}</span></p>
            </div>
        </div>
    </div>
</div>`,
        moduleTemplate8: `
<div class="col-xs-12 col-lg-6" style="margin-top: 30px;">
    <div id="1" style="display: table; height: 100%; border-bottom: 3px solid #222160;">
        <div style="display: table-row;">
            <div style="display: table-cell; background-color: #f0f1ef;"><img id="19447393" role="presentation" src="{{imageSrc}}" alt="" data-ally-user-updated-alt="" data-decorative="true" data-api-returntype="File" data-api-endpoint="{{imageEndpoint}}" /></div>
        </div>
        <div style="display: table-row;">
            <div style="display: table-cell; height: 100%; background-color: #f0f1ef; text-decoration: none; padding: 0px 20px 0px 20px; text-align: left;">
                <h3><a class="inline_disabled" style="text-decoration: none;" href="{{moduleLink}}" data-api-endpoint="{{moduleEndpoint}}" data-api-returntype="Page"><span style="font-size: 16pt; color: #222160; font-family: museo500; border-bottom: 3px solid #222160;"><span>{{moduleNumber}}. {{moduleName}}</span></span></a></h3>
                <p><span class="ui-provider fz b c d e f g h i j k l m n o p q r s t u v w x y z ab ac ae af ag ah ai aj ak" dir="ltr">{{topicAndContentAreas}}</span></p>
            </div>
        </div>
    </div>
</div>`,
        imageSrcs: ["/courses/137273/files/37388452/preview", "/courses/137273/files/37388453/preview", "/courses/137273/files/37388454/preview", "/courses/137273/files/37388455/preview", "/courses/137273/files/37388456/preview", "/courses/137273/files/37388457/preview", "/courses/137273/files/37388458/preview", "/courses/137273/files/37388459/preview", "/courses/137273/files/37388460/preview", "/courses/137273/files/37388461/preview", "/courses/137273/files/37388462/preview", "/courses/137273/files/37388463/preview"],
        imageEndpoints: ["https://rmit.instructure.com/api/v1/courses/119776/files/30419413", "https://rmit.instructure.com/api/v1/courses/116733/files/28482794", "https://rmit.instructure.com/api/v1/courses/119776/files/30419418", "https://rmit.instructure.com/api/v1/courses/119776/files/30419416", "https://rmit.instructure.com/api/v1/courses/119776/files/30419422", "https://rmit.instructure.com/api/v1/courses/119776/files/30419414", "https://rmit.instructure.com/api/v1/courses/119776/files/30419417", "https://rmit.instructure.com/api/v1/courses/119776/files/30419420", "https://rmit.instructure.com/api/v1/courses/119776/files/30419412", "https://rmit.instructure.com/api/v1/courses/119776/files/30419415", "https://rmit.instructure.com/api/v1/courses/119776/files/30419423", "https://rmit.instructure.com/api/v1/courses/119776/files/30419421"],
        moduleLinks: ["/courses/137273/modules/items/6140119", "/courses/137273/modules/items/6140130", "/courses/137273/modules/items/6140141", "/courses/137273/modules/items/6140152", "/courses/137273/modules/items/6140163", "/courses/137273/modules/items/6140174", "/courses/137273/modules/items/6140185", "/courses/137273/modules/items/6140199", "/courses/137273/modules/items/6140210", "/courses/137273/modules/items/6140221", "/courses/137273/modules/items/6140232", "/courses/137273/modules/items/6140243"],
        moduleEndpoints: ["https://rmit.instructure.com/api/v1/courses/119776/pages/1-dot-0-%257C-overview", "/courses/137273/modules/items/6140130", "/courses/137273/modules/items/6140141", "https://rmit.instructure.com/api/v1/courses/119776/pages/4-dot-0-%257C-overview", "https://rmit.instructure.com/api/v1/courses/119776/pages/5-dot-0-%257C-overview", "$CANVAS_COURSE_REFERENCE$/modules/items/g8293266912e11f94ce998fe9b867bc68", "$CANVAS_COURSE_REFERENCE$/modules/items/g0209280223144c3360b5f8e5a0edbfb3", "$CANVAS_COURSE_REFERENCE$/modules/items/g8c489ddfcf14b15b5922051bec8aca50", "$CANVAS_COURSE_REFERENCE$/modules/items/g04e7b8e554273d58e6af8ae79ce08629", "$CANVAS_COURSE_REFERENCE$/modules/items/gcc39d9fe92dc75b9b3bba9f91238959d", "$CANVAS_COURSE_REFERENCE$/modules/items/g98ecd0afd24db9c9cdcaf9740f615a63", "$CANVAS_COURSE_REFERENCE$/modules/items/g862ce18abc82e8d747f5d125c7b5261a"]
    },
    SCD: {
        header: `
<div id="emble-customise-b10fdf7c" class="customise emble emble-banner emble-prevent-insert emble-prevent-delete-recursive emble-banner-theme-rmit-light" style="padding: 0px; margin: 0px;" title="embedded content" data-context-menu="customise delete" data-customise="new-banner-theme" data-emble-name="Banner" data-emble-version="2.0">
    <div>
        <div style="display: grid; grid-template-columns: repeat(20,1fr); grid-auto-rows: 1fr; height: auto;">
            <div style="grid-column: 1/21; grid-row: 1/12; z-index: 1; height: 100%; overflow: hidden; position: relative;">
                <div style="width: 1040px; height: 100%;"><img style="display: block; min-height: 100%; width: 1040px; top: 0; left: 0;" role="presentation;" src="{{headerImageSrc}}" alt="" data-ally-user-updated-alt="" data-decorative="true" /></div>
            </div>
            <h2 style="grid-column: 2/20; grid-row: 4/10; z-index: 3; max-width: 100%;"><span style="vertical-align: middle; display: inline-block; text-align: left; color: #222160; text-decoration: none; font-family: museo700; font-size: 32pt;"><span class="stem-header-box-decoration-break" style="background-color: #e3e5e0; padding: 3px 15px; font-size: 32pt;">{{courseName}}</span></span><br /><span style="color: #ffffff; font-family: museo300;"><span style="font-size: 16px; background-color: #e61e2a; padding: 3px 15px;"><strong>{{courseCode}} | {{schoolName}}</strong></span></span></h2>
            <div class="emble-banner-accent" style="z-index: 2; grid-row: 10/12;">
                <div class="ribbon" style="grid-row: 10/12;"><img class="pixel-regular" src="/courses/88862/files/19139937/preview" data-api-endpoint="https://rmit.instructure.com/api/v1/courses/88862/files/19139937" data-api-returntype="File" /></div>
            </div>
        </div>
    </div>
</div>
<p class="narrow-p"> </p>
<table class="stem-bg-shadow" style="border-collapse: collapse; width: 100%; margin-left: auto; margin-right: auto; border: 1px solid #f1f2f3; border-top: 5px solid #222160;" role="presentation" cellpadding="10px">
    <tbody>
        <tr>
            <td style="width: 100%; padding: 20px;">
                <p><span dir="ltr">{{coursePromise}}</span></p>
                <p><span><span class="TextRun SCXW24004924 BCX0" lang="EN-AU" data-contrast="auto"><span class="NormalTextRun SCXW24004924 BCX0">This Canvas course site will provide activities and materials to help you learn. You will also submit your <a class="inline_disabled" href="#">assessments</a> here. If you're not sure how to do something, check out our <a class="inline_disabled" href="#">help with Canvas</a>. </span></span></span></p>
                <p id="emble-customise-5e591084" class="btn emble-btn customise emble-prevent-delete-recursive btn-blue" data-context-menu="customise rce-link rce-course-links delete" data-customise="icon button-theme" data-emble-name="Button" data-emble-version="2.0"><a> <i class="icon-none"></i></a> <a class="inline_disabled" title="Link" href="#">Getting Started</a></p>
                <span> </span>
                <p id="emble-customise-228a2824" class="btn emble-btn btn-blue customise emble-prevent-delete-recursive" data-context-menu="customise rce-link rce-course-links delete" data-customise="icon button-theme" data-emble-name="Button" data-emble-version="2.0"><a><i class="icon-none"> </i></a><a class="inline_disabled" title="Link" href="http://www1.rmit.edu.au/browse;ID=msrkgrf8e6ef1" target="_blank" rel="noopener">Course Guide </a></p>
                <span> </span>
                <p id="emble-customise-228a2824" class="btn emble-btn btn-blue customise emble-prevent-delete-recursive" data-context-menu="customise rce-link rce-course-links delete" data-customise="icon button-theme" data-emble-name="Button" data-emble-version="2.0"><a><i class="icon-none"> </i></a><a class="inline_disabled" title="Link" href="#">Digital Class Links</a></p>
            </td>
        </tr>
    </tbody>
</table>`,
        moduleTemplate12: `
<div class="col-xs-12 col-lg-4" style="margin-top: 30px;">
    <div id="1" style="display: table; height: 100%; border-bottom: 3px solid #222160;">
        <div style="display: table-row;">
            <div style="display: table-cell; background-color: #f0f1ef;"><img role="presentation" src="{{imageSrc}}" alt="" data-ally-user-updated-alt="" data-decorative="true" /></div>
        </div>
        <div style="display: table-row;">
            <div style="display: table-cell; height: 100%; background-color: #f0f1ef; text-decoration: none; padding: 0px 20px 0px 20px; text-align: left;">
                <h3><a class="inline_disabled" style="text-decoration: none;" href="#"><span style="font-size: 16pt; color: #222160; font-family: museo500; border-bottom: 3px solid #222160;"><span>{{moduleNumber}}. {{moduleName}}</span></span></a></h3>
                <p><span dir="ltr">{{topicAndContentAreas}}</span></p>
            </div>
        </div>
    </div>
</div>`,
        moduleTemplate8: `
<div class="col-xs-12 col-lg-6" style="margin-top: 30px;">
    <div id="1" style="display: table; height: 100%; border-bottom: 3px solid #222160;">
        <div style="display: table-row;">
            <div style="display: table-cell; background-color: #f0f1ef;"><img role="presentation" src="{{imageSrc}}" alt="" data-ally-user-updated-alt="" data-decorative="true" /></div>
        </div>
        <div style="display: table-row;">
            <div style="display: table-cell; height: 100%; background-color: #f0f1ef; text-decoration: none; padding: 0px 20px 0px 20px; text-align: left;">
                <h3><a class="inline_disabled" style="text-decoration: none;" href="#"><span style="font-size: 16pt; color: #222160; font-family: museo500; border-bottom: 3px solid #222160;"><span>{{moduleNumber}}. {{moduleName}}</span></span></a></h3>
                <p><span dir="ltr">{{topicAndContentAreas}}</span></p>
            </div>
        </div>
    </div>
</div>`,
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

const schoolNames = {
    'TBS': 'The Business School',
    'SSET': 'School of Science, Engineering & Technology',
    'SCD': 'School of Communication Design'
};

// Function to show/hide the SCD program dropdown
function handleSchoolChange() {
    const schoolSelectValue = document.getElementById("school").value;
    const scdProgramContainer = document.getElementById("scd-program-container");
    if (schoolSelectValue === 'SCD') {
        scdProgramContainer.style.display = 'block';
    } else {
        scdProgramContainer.style.display = 'none';
    }
}

function generateModuleFields() {
    const layoutChoice = parseInt(document.getElementById("layout-choice").value);
    const moduleCount = layoutChoice === 12 ? 12 : 8;
    const container = document.getElementById("module-container");
    container.innerHTML = "";

    let gridRow = '<div class="grid-row">';
    for (let i = 1; i <= moduleCount; i++) {
        const moduleHTML = `
            <div class="col-xs-12 col-md-4">
                <div class="module-box">
                    <h3>Module ${i}</h3>
                    <label>Module Name:</label>
                    <input type="text" name="module-name-${i}" required placeholder="e.g. Introduction">
                    <label>Topic and Content Areas (max 30 words):</label>
                    <textarea name="topic-and-content-areas-${i}" rows="2" required placeholder="e.g. Digital Systems: Circuit design, simulation tools" oninput="limitWords(this, 30)"></textarea>
                </div>
            </div>
        `;
        gridRow += moduleHTML;

        if (i % 3 === 0 && i !== moduleCount) {
            gridRow += '</div><div class="grid-row">';
        }
    }
    gridRow += '</div>';
    container.innerHTML = gridRow;
}

function limitWords(textarea, maxWords) {
    const words = textarea.value.trim().split(/\s+/);
    if (words.length > maxWords) {
        textarea.value = words.slice(0, maxWords).join(' ');
        alert(`Maximum of ${maxWords} words allowed. Extra words have been removed.`);
    }
}

function parseUserHTML(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    const bannerH2 = doc.querySelector('h2');
    let school = document.getElementById("school").value;
    let courseName = '';
    let courseCode = '';
    if (bannerH2) {
        const spans = bannerH2.querySelectorAll('span');
        courseName = spans[0]?.textContent.trim() || '';
        const codeAndSchool = spans[1]?.textContent.trim().split(' | ') || [];
        courseCode = codeAndSchool[0] || '';
        const detectedSchoolName = codeAndSchool[1] || '';
        if (detectedSchoolName === schoolNames['TBS']) school = 'TBS';
        if (detectedSchoolName === schoolNames['SSET']) school = 'SSET';
    }

    const moduleLinks = [];
    const moduleEndpoints = [];
    const moduleElements = doc.querySelectorAll('a[data-api-endpoint]');
    moduleElements.forEach((a) => {
        moduleLinks.push(a.getAttribute('href'));
        moduleEndpoints.push(a.getAttribute('data-api-endpoint'));
    });

    return { school, courseName, courseCode, moduleLinks, moduleEndpoints };
}

// Add event listener for the school dropdown
document.getElementById("school").addEventListener("change", handleSchoolChange);

document.getElementById("syllabus-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const userHTML = document.getElementById("user-html").value;
    const coursePromise = document.getElementById("course-promise").value;
    const layoutChoice = parseInt(document.getElementById("layout-choice").value);
    const moduleCount = layoutChoice === 12 ? 12 : 8;

    const parsedData = parseUserHTML(userHTML);
    const school = parsedData.school;
    const courseName = parsedData.courseName || 'Unknown Course';
    const courseCode = parsedData.courseCode || 'Unknown Code';
    const schoolName = schoolNames[school];
    const newModuleLinks = parsedData.moduleLinks;
    const newModuleEndpoints = parsedData.moduleEndpoints;

    let template;
    let imageSources;
    let finalHeader;

    if (school === 'SCD') {
        const scdProgram = document.getElementById("scd-program").value;
        template = templates.SCD;
        const programData = templates.SCD.programs[scdProgram];
        imageSources = programData.imageSrcs;
        finalHeader = templates.SCD.header.replace("{{headerImageSrc}}", programData.headerImageSrc);
    } else {
        template = templates[school];
        imageSources = template.imageSrcs;
        finalHeader = template.header;
    }
    
    const moduleTemplate = layoutChoice === 12 ? template.moduleTemplate12 : template.moduleTemplate8;

    let generatedCode = finalHeader
        .replace("{{courseName}}", courseName)
        .replace("{{courseCode}}", courseCode)
        .replace("{{schoolName}}", schoolName)
        .replace("{{coursePromise}}", coursePromise);

    let modulesHTML = '<div class="content-box" style="margin: 0 0;"><div class="grid-row">';
    for (let i = 1; i <= moduleCount; i++) {
        const moduleName = document.querySelector(`input[name="module-name-${i}"]`).value;
        const topicAndContentAreas = document.querySelector(`textarea[name="topic-and-content-areas-${i}"]`).value;

        const moduleLink = (school !== 'SCD' && newModuleLinks[i-1]) ? newModuleLinks[i-1] : '#';
        const moduleEndpoint = (school !== 'SCD' && newModuleEndpoints[i-1]) ? newModuleEndpoints[i-1] : '#';

        let moduleHTML = moduleTemplate
            .replace("{{imageSrc}}", imageSources[i - 1])
            .replace("{{moduleNumber}}", i)
            .replace("{{moduleName}}", moduleName)
            .replace("{{topicAndContentAreas}}", topicAndContentAreas);

        // Only add links and endpoints if they are not for the generic SCD template
        if (school !== 'SCD') {
             moduleHTML = moduleHTML
                .replace("{{moduleLink}}", newModuleLinks[i - 1] || template.moduleLinks[i-1])
                .replace("{{moduleEndpoint}}", newModuleEndpoints[i - 1] || template.moduleEndpoints[i-1]);
        } else {
             moduleHTML = moduleHTML
                .replace('href="{{moduleLink}}"', 'href="#"')
                .replace('data-api-endpoint="{{moduleEndpoint}}"', '');
        }

        modulesHTML += moduleHTML;

        if ((layoutChoice === 12 && i % 3 === 0) || (layoutChoice === 8 && i % 2 === 0)) {
            if (i !== moduleCount) {
                modulesHTML += '</div></div><div class="content-box" style="margin: 0 0;"><div class="grid-row">';
            }
        }
    }
    modulesHTML += '</div></div><p> </p>';

    generatedCode += modulesHTML;

    const generatedCodeDiv = document.getElementById("generated-code");
    generatedCodeDiv.textContent = generatedCode;
    document.getElementById("copy-button").style.display = "inline-block";
});

document.getElementById("copy-button").addEventListener("click", function() {
    const generatedCode = document.getElementById("generated-code").textContent;
    navigator.clipboard.writeText(generatedCode).then(() => {
        alert("Code copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy: ", err);
        localStorage.setItem("generatedCode", generatedCode);
        alert("Copy to clipboard failed. Code saved to local storage instead.");
    });
});

// Initial call to populate module fields on page load
generateModuleFields();
