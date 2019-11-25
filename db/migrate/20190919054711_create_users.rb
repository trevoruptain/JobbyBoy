class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :phone, null: false
      t.string :address, null: false
      t.string :objective, null: false
      t.string :google_token, null: false
      t.string :google_refresh_token, null: false

      t.timestamps
    end

    add_index :users, :name
  end
end
