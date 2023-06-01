@productCatalog @e2e @resetAppState
Feature: Browsing products from Swag Labs
  As a user
  I want to be able to browse products from Swag Labs
  So that I can buy some of them

  @addProducts
  Scenario Outline: Add products to the cart
    Given I login as an "standard_user" user
    When I add the following products to the cart
      | products_names   |
      | <products_names> |
    Then The products should be added to the cart
      | products_names   |
      | <products_names> |

    Examples:
      | products_names                                                                                               |
      | Sauce Labs Backpack,Sauce Labs Bike Light,Sauce Labs Bolt T-Shirt,Sauce Labs Fleece Jacket,Sauce Labs Onesie |

  @removeProducts
  Scenario: Remove products from the cart
    Given I login as an "standard_user" user
    When I add the following products to the cart
      | products_names   |
      | <products_names> |
    Then I remove the following products from the cart
      | products_names   |
      | <products_names> |
    And The products should be removed from the cart
      | products_names   |
      | <products_names> |

    Examples:
      | products_names                                                                                               |
      | Sauce Labs Backpack,Sauce Labs Bike Light,Sauce Labs Bolt T-Shirt,Sauce Labs Fleece Jacket,Sauce Labs Onesie |
