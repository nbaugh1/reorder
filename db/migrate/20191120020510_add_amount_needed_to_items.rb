class AddAmountNeededToItems < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :amount_needed, :integer
  end
end
