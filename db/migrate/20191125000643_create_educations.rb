class CreateEducations < ActiveRecord::Migration[5.2]
  def change
    create_table :educations do |t|
      t.string :school, null: false
      t.integer :year, null: false
      t.string :concentration, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end
