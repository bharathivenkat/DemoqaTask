Feature: The valves are Inserted in Textbox , verify the Radio buttons and checkbox

Background:
Given user is in the Demoqa page

 Scenario: Insert the text inside the Textbox
When user passes the text into the textbox
Then verify the textboxs

Scenario: verifying checkbox
When user clicks on the checkbox
Then user verifies whether the checkbox is selected or not

Scenario: Radio button Verification

When user clicks on the radio button
Then user verifies whether the radio is selected or not

Scenario: Dropdown default text Verification

When user clicks the dropdown menu
Then user verifies whether the dropdown default value is same or not
