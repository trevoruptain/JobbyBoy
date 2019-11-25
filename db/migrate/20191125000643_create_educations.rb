class CreateEducations < ActiveRecord::Migration[5.2]
  def change
    create_table :educations do |t|
      t.string :school
      t.integer :year
      t.string :concentration
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end
