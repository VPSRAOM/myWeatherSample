Feature: Getting the weather forecast
  In order to get weather
  As person who has to go outside sometimes
  I want to be told the weather so i know what to wear

  @WeatherScenario
  Scenario: Get forecast for added location Aberdeen
    Given I opened the app
    Then I clear the search text
    When I type "Aberdeen"
    When I press the enter key
    Then I see the weather forecast

  @WeatherScenario
  Scenario: Get forecast for added location Edinburgh
    Given I opened the app
    Then I clear the search text
    When I type "Edinburgh"
    When I press the enter key
    Then I see the weather forecast for five days

  @WeatherScenario
  Scenario: Get forecast for for 3 hourly for added location
    Given I opened the app
    Then I clear the search text
    When I type "Perth"
    When I press the enter key
    When I click I see the weather forecast
    When I check Daily forecast should summarise the three hour data

