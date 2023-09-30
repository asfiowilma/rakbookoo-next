CREATE OR REPLACE FUNCTION create_user_on_new_auth_user()
RETURNS TRIGGER AS $$
BEGIN
   IF new.raw_app_meta_data ->> 'provider' = 'email' THEN
    INSERT INTO public."User" (uid, name)
    VALUES (new.id, new.raw_user_meta_data ->> 'username');
  ELSIF new.raw_app_meta_data ->> 'provider' = 'google' THEN
    INSERT INTO public."User" (uid, name, avatar_url)
    VALUES (new.id, new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'avatar_url');
  ELSIF new.raw_app_meta_data ->> 'provider' = 'discord' THEN
    INSERT INTO public."User" (uid, name, avatar_url)
    VALUES (new.id, new.raw_user_meta_data -> 'custom_claims' ->> 'global_name', new.raw_user_meta_data ->> 'avatar_url'); 
  END IF;

END;
$$ LANGUAGE plpgsql security definer;
