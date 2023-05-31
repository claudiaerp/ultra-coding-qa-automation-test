@cart @resetAppState @e2e
Feature: Purchasing products from Swag Labs
  As a user
  I want to be able to do a purchase
  So that I can get the product that I want

  @addProducts
  Scenario Outline: Opening the cart
    Given I login as an "standard_user" user
    And I add the following products to the cart
      | products_names   |
      | <products_names> |
    When I go to "Cart" page
    Then I should be redirected to the "Cart" page
      | page_title |
      | Your Cart  |
    And I can see the following products in my cart
      | products_names   |
      | <products_names> |

    Examples:
      | products_names                                                                                               |
      | Sauce Labs Backpack,Sauce Labs Bike Light,Sauce Labs Bolt T-Shirt,Sauce Labs Fleece Jacket,Sauce Labs Onesie |

  @removeProducts
  Scenario Outline: Remove products from the cart
    Given I login as an "standard_user" user
    When I add the following products to the cart
      | products_names   |
      | <products_names> |
    And I go to "Cart" page
    And I should be redirected to the "Cart" page
      | page_title |
      | Your Cart  |
    And I can see the following products in my cart
      | products_names   |
      | <products_names> |
    And I remove the following products from the cart
      | products_names   |
      | <products_names> |
    Then The products should be removed from the cart
      | products_names   |
      | <products_names> |

    Examples:
      | products_names                                                                                               |
      | Sauce Labs Backpack,Sauce Labs Bike Light,Sauce Labs Bolt T-Shirt,Sauce Labs Fleece Jacket,Sauce Labs Onesie |

  @successfulCheckout
  Scenario Outline: Do a successful checkout
    Given I login as an "standard_user" user
    When I add the following products to the cart
      | products_names   |
      | <products_names> |
    When I go to "Cart" page
    Then I should be redirected to the "Cart" page
      | page_title |
      | Your Cart  |
    And I can see the following products in my cart
      | products_names   |
      | <products_names> |
    And I proceed to the checkout
    And I enter valid personal information details
    And I confirm the order
    Then I should be redirected to the "Thank you" page
      | page_title          |
      | Checkout: Complete! |

    Examples:
      | products_names                                                                                               |
      | Sauce Labs Backpack,Sauce Labs Bike Light,Sauce Labs Bolt T-Shirt,Sauce Labs Fleece Jacket,Sauce Labs Onesie |

  @failedCheckout
  Scenario Outline: Do a failed checkout using invalid personal information details
    Given I login as an "standard_user" user
    When I add the following products to the cart
      | products_names   |
      | <products_names> |
    When I go to "Cart" page
    Then I should be redirected to the "Cart" page
      | page_title |
      | Your Cart  |
    And I can see the following products in my cart
      | products_names   |
      | <products_names> |
    And I proceed to the checkout
    And I enter invalid personal information details
    And I should see an error displayed with the following message
      | Error: First Name is required |
    Then Continue button should be disabled

    Examples:
      | products_names                                                                                               |
      | Sauce Labs Backpack,Sauce Labs Bike Light,Sauce Labs Bolt T-Shirt,Sauce Labs Fleece Jacket,Sauce Labs Onesie |

  @failedCheckout
  Scenario: Do a failed checkout using an empty cart
    Given I login as an "standard_user" user
    When I go to "Cart" page
    Then I should be redirected to the "Cart" page
      | page_title |
      | Your Cart  |
    Then Checkout button should be disabled
