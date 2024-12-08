Feature: Playwright site

    Scenario: Check title
        Given I open url "https://playwright.dev"
        Then I see "Playwright" in title
        When I click link "Get started"
        Then I see "Installation" as headline
        Then I see "Introduction" as headline with level "2"
        When I click link "Next Writing tests"
        Then I see "Writing tests" as headline with level "1"
        


