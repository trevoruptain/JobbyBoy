class CreateExperienceBullets < ActiveRecord::Migration[5.2]
  def change
    create_table :experience_bullets do |t|
      t.integer :experience_id, null: false
      t.text :body, null: false

      t.timestamps
    end
  end
end
