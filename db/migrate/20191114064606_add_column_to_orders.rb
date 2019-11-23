class AddColumnToOrders < ActiveRecord::Migration[5.2]
  def change
    add_column :orders, :neededItems, :text, array: true, default: []
  end
end
