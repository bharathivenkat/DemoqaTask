$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("demo.feature");
formatter.feature({
  "line": 1,
  "name": "The valves are Inserted in Textbox , verify the Radio buttons and checkbox",
  "description": "",
  "id": "the-valves-are-inserted-in-textbox-,-verify-the-radio-buttons-and-checkbox",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is in the Demoqa page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDedinition.user_is_in_the_Demoqa_page()"
});
formatter.result({
  "duration": 14386631845,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Insert the text inside the Textbox",
  "description": "",
  "id": "the-valves-are-inserted-in-textbox-,-verify-the-radio-buttons-and-checkbox;insert-the-text-inside-the-textbox",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@Textbox"
    },
    {
      "line": 6,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user passes the text into the textbox",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "verify the textboxs",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDedinition.user_passes_the_text_into_the_textbox()"
});
formatter.result({
  "duration": 3636148425,
  "status": "passed"
});
formatter.match({
  "location": "StepDedinition.verify_the_textbox()"
});
formatter.result({
  "duration": 281400235,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:20)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:27)\r\n\tat org.test.Demoqatask.StepDedinition.verify_the_textbox(StepDedinition.java:42)\r\n\tat ✽.Then verify the textboxs(demo.feature:9)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is in the Demoqa page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDedinition.user_is_in_the_Demoqa_page()"
});
formatter.result({
  "duration": 13742688657,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "verifying checkbox",
  "description": "",
  "id": "the-valves-are-inserted-in-textbox-,-verify-the-radio-buttons-and-checkbox;verifying-checkbox",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@Checkbox"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user clicks on the checkbox",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user verifies whether the checkbox is selected or not",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDedinition.user_clicks_on_the_checkbox()"
});
formatter.result({
  "duration": 194294823,
  "status": "passed"
});
formatter.match({
  "location": "StepDedinition.user_verifies_whether_the_checkbox_is_selected_or_not()"
});
formatter.result({
  "duration": 38510922,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is in the Demoqa page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDedinition.user_is_in_the_Demoqa_page()"
});
formatter.result({
  "duration": 10444771571,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Radio button Verification",
  "description": "",
  "id": "the-valves-are-inserted-in-textbox-,-verify-the-radio-buttons-and-checkbox;radio-button-verification",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@Radiobox"
    },
    {
      "line": 16,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "user clicks on the radio button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user verifies whether the radio is selected or not",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDedinition.user_clicks_on_the_radio_button()"
});
formatter.result({
  "duration": 220428242,
  "status": "passed"
});
formatter.match({
  "location": "StepDedinition.user_verifies_whether_the_radio_is_selected_or_not()"
});
formatter.result({
  "duration": 34414682,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is in the Demoqa page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDedinition.user_is_in_the_Demoqa_page()"
});
formatter.result({
  "duration": 17390356541,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Dropdown default text Verification",
  "description": "",
  "id": "the-valves-are-inserted-in-textbox-,-verify-the-radio-buttons-and-checkbox;dropdown-default-text-verification",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@Dropdown"
    },
    {
      "line": 22,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "user clicks the dropdown menu",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user verifies whether the dropdown default value is same or not",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDedinition.user_clicks_the_dropdown_menu()"
});
formatter.result({
  "duration": 328924221,
  "status": "passed"
});
formatter.match({
  "location": "StepDedinition.user_verifies_whether_the_dropdown_default_value_is_same_or_not()"
});
});