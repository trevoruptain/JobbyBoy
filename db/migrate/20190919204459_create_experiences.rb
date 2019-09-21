class CreateExperiences < ActiveRecord::Migration[5.2]
  def change
    create_table :experiences do |t|
      t.string :start_date, null: false
      t.string :end_date, null: false
      t.string :company_name, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end
