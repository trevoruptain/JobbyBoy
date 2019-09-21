class CreateUserTechnologies < ActiveRecord::Migration[5.2]
  def change
    create_table :user_technologies do |t|
      t.integer :user_id
      t.integer :technology_id

      t.timestamps
    end

    add_index :user_technologies, :user_id
    add_index :user_technologies, :technology_id
  end
end
