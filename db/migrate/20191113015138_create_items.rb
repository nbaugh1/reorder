class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.text :name
      t.integer :par
      t.integer :on_hand
      t.text :quantity

      t.timestamps
    end
  end
end
