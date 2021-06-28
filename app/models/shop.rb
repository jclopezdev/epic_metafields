# frozen_string_literal: true

class Shop < ApplicationRecord
  include ShopifyApp::ShopSessionStorage

  def api_version
    ShopifyApp.configuration.api_version
  end
end
