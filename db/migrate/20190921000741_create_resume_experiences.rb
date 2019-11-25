class CreateResumeExperiences < ActiveRecord::Migration[5.2]
  def change
    create_table :resume_experiences do |t|
      t.integer :resume_id, null: false
      t.integer :experience_id, null: false

      t.timestamps
    end

    add_index :resume_experiences, :resume_id
    add_index :resume_experiences, :experience_id
  end
end
